class AddIrrigationConfiguration < ActiveRecord::Migration
  def change
    add_column    :terminals, :irrigation, :boolean
  end
end
