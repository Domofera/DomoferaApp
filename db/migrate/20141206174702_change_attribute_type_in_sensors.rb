class ChangeAttributeTypeInSensors < ActiveRecord::Migration
  def change
    rename_column :sensors, :type, :name
  end
end
