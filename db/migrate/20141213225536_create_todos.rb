class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :user_id
      t.string :text
      t.date :date
      t.boolean :done, default: false
      t.timestamps
    end
  end
end
