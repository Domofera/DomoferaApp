class CreateTerminals < ActiveRecord::Migration
  def change
    create_table :terminals do |t|
      t.integer :user_id
      t.string :name
      t.text :description
      t.string :password
      t.timestamps
      t.timestamps
    end
  end
end
