class ChangeDays < ActiveRecord::Migration
  def change
    rename_column :days, :day, :day_name
  end
end
