class ChangeSensors < ActiveRecord::Migration
  def change
    rename_column :sensors, :terminal_id, :day_id #sensor now points to day
    remove_column :sensors, :value

    add_column    :sensors, :humidity_air,      :float
    add_column    :sensors, :humidity_floor,    :float
    add_column    :sensors, :temperature_air,   :float
    add_column    :sensors, :temperature_floor, :float
    add_column    :sensors, :light,             :float
  end
end
