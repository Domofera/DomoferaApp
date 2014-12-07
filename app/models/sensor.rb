class Sensor < ActiveRecord::Base
  belongs_to :terminal

  validates :name, inclusion: {in: ['Humedad','Humedad-Suelo','Temperatura',
                                    'pH','Luz','Viento']}

end
