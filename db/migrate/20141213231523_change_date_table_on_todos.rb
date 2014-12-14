class ChangeDateTableOnTodos < ActiveRecord::Migration
  def change
    rename_column :todos, :date, :taskdate
  end
end
