class AddWifiConfiguration < ActiveRecord::Migration
  def change
    add_column    :terminals, :wifi_name, :string
    add_column    :terminals, :wifi_password, :string
    add_column    :terminals, :wifi_confirmation, :boolean
  end
end
