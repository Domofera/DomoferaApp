class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :username
      t.string  :email
      t.string  :password_hash
      t.string  :password_salt
      t.string  :confirmation_token
      t.boolean :confirmed, default: false
      t.string  :session_token
      t.string  :city
      t.string  :country
      t.timestamps
    end
  end
end
