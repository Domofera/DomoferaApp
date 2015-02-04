class CreateDayTable < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.integer :terminal_id
      t.integer :day
      t.integer :month
      t.integer :year

      t.float   :temperature_floor_max
      t.float   :temperature_floor_min
      t.float   :temperature_floor_average

      t.float   :temperature_air_min
      t.float   :temperature_air_max
      t.float   :temperature_air_average

      t.float   :humidity_floor_max
      t.float   :humidity_floor_min
      t.float   :humidity_floor_average
      t.float   :humidity_air_max
      t.float   :humidity_air_min
      t.float   :humidity_air_average

      t.float   :wind_max
      t.float   :wind_min
      t.float   :wind_average

      t.timestamps
    end
  end
end
