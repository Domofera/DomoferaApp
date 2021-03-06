class Terminal < ActiveRecord::Base
	belongs_to :user
	has_many   :days, :dependent => :destroy

	validates :name, :presence => { :message => "El nombre no puede estar vacío" }
	validates :name, :length   => { :maximum => 20,
																	:message => "El nombre no puede tener más de
																							20 caracteres"}
  validates :name, :format   => { :with    => /\A[a-zA-Z0-9' ']*\z/,
																	:message => "El nombre solo puede contener caracteres,
																							numeros y espacios en blanco"}

  validates :password, :presence  => { :message => "La contraseña no puede estar vacía" }
	validates :password, :length    => { :maximum =>  20,
	 																		 :message => "La contraseña no puede tener
																								más de 20 caracteres"}

  validates :password, :format    => { :with    => /\A[a-zA-Z0-9' ']*\z/,
																			 :message => "La contraseña solo puede contener caracteres,
																									numeros y espacios en blanco"}
	validates :description, :length    => { :maximum =>  60,
																				 :message => "La descripción no puede tener
																				              más de 60 caracteres"}

end
