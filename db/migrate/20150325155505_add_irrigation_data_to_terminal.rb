class AddIrrigationDataToTerminal < ActiveRecord::Migration
  def change
    add_column    :terminals, :irrigation_start, :datetime
    add_column    :terminals, :irrigation_end,   :datetime 
  end
end
