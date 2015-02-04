class Day < ActiveRecord::Base
  belongs_to :terminal
  has_many   :sensors, :dependent => :destroy
end
