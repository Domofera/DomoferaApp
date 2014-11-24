class User < ActiveRecord::Base
  attr_accessor :password, :password_confirmation
  before_save :encrypt_password

  validates :username, presence: true,
					 length: { maximum: 20 },
           format: { with: /\A[a-zA-Z0-9' ']*\z/ },
					 :uniqueness => true

  validates :email, :presence => true,
            :uniqueness => true

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end

  def confirm!
    update_attributes!(confirmation_token: nil, confirmed: true)
  end

  def set_session_token
    new_session_token = SecureRandom.urlsafe_base64(24)
    update_attributes(session_token: new_session_token)
    return new_session_token
  end
end
