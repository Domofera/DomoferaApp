class Changetableontodos < ActiveRecord::Migration
  def change
    rename_column :todos, :text, :content
  end
end
