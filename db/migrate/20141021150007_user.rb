class User < ActiveRecord::Migration
  def change
  	create_table :users do |t|
      t.string :username
      t.string :email
      t.string :country
      t.string :city
 
      t.timestamps
    end
  end
end
