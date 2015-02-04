class DropMonthTable < ActiveRecord::Migration
  def change
    drop_table :month_records
  end
end
