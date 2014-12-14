class User < ActiveRecord::Base
  attr_accessor :password, :password_confirmation
  before_save :encrypt_password
  has_many   :terminals, :dependent => :destroy
  has_many   :todos, :dependent => :destroy

  validates :username, :presence => { :message => "El nombre no puede estar vacío" }
  validates :username, :length   => { :maximum => 20,
                                      :message => "El nombre no puede tener más de
                                       20 caracteres"}
  validates :username, :format   => { :with    => /\A[a-zA-Z0-9' ']*\z/,
                                      :message => "El nombre solo puede contener caracteres,
                                       numeros y espacios en blanco"}

  validates :username, :uniqueness => { :message => "El nombre debe de ser único" }

  validates :email, :presence => { :message => "El email no puede estar vacío" }
  validates :email, :uniqueness  => { :message => "El email debe de ser único" }

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
