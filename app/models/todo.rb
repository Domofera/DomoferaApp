class Todo < ActiveRecord::Base
  belongs_to :user

  validates :content, :presence => { :message => "Introduce alguna tarea." }
  validates :content, :length   => { :maximum => 20,
    :message => "El nombre no puede tener más de
    20 caracteres"}
end
