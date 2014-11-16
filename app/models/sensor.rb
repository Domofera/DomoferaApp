class Sensor < ActiveRecord::Base
  belongs_to :terminal

  validates :type, inclusion: {in: ['humidity','humidityGround','temperature',
                                    'ph','light','wind']}

  # validate :value_is_a_valid_json?
  #
  # def value_is_a_valid_json?
  #   JSON.parse(:value)
  #   return true
  # rescue JSON::ParserError
  #   errors.add(:value, 'The value is not a valid JSON!')
  #   return false
  # end
end
