class Terminal < ActiveRecord::Base
	belongs_to :user
	has_many   :sensors, :dependent => :destroy

	validates :name, :presence => { :message => "El nombre no puede estar vacío" }
	validates :name, :length   => { :maximum => 20,
																	:message => "El nombre no puede tener más de
																							20 caracteres"}
  validates :name, :format   => { :with    => /\A[a-zA-Z0-9' ']*\z/,
																	:message => "El nombre solo puede contener caracteres,
																							numeros y espacios en blanco"}

  validates :password, presence: true,
           length: { maximum: 20 },
           format: { with: /\A[a-zA-Z0-9' ']*\z/ }

	validates :description,
					 length: { maximum: 60 },
					 format: { with: /\A[a-zA-Z0-9' ']*\z/ }

end
