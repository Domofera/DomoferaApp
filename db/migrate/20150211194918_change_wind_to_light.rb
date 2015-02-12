class ChangeWindToLight < ActiveRecord::Migration
  def change
    rename_column :days, :wind_min, :light_min
    rename_column :days, :wind_max, :light_max
    rename_column :days, :wind_average, :light_average
  end
end
