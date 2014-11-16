class CreateSensors < ActiveRecord::Migration
  def change
    create_table :sensors do |t|
      t.integer :terminal_id
      t.string :type
      t.string :value
      t.timestamps
    end
  end
end
