class CreateMonthRecord < ActiveRecord::Migration
  def change
    create_table :month_records do |t|
        t.integer :terminal_id
        t.string  :month
        t.string  :data #sensor data in JSON format
        t.string  :generalData #max, mins and average in JSON format
        t.timestamps
    end
  end
end
