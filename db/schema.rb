# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150325155505) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "days", force: true do |t|
    t.integer  "terminal_id"
    t.integer  "day_name"
    t.integer  "month"
    t.integer  "year"
    t.float    "temperature_floor_max"
    t.float    "temperature_floor_min"
    t.float    "temperature_floor_average"
    t.float    "temperature_air_min"
    t.float    "temperature_air_max"
    t.float    "temperature_air_average"
    t.float    "humidity_floor_max"
    t.float    "humidity_floor_min"
    t.float    "humidity_floor_average"
    t.float    "humidity_air_max"
    t.float    "humidity_air_min"
    t.float    "humidity_air_average"
    t.float    "light_max"
    t.float    "light_min"
    t.float    "light_average"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "sensors", force: true do |t|
    t.integer  "day_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "humidity_air"
    t.float    "humidity_floor"
    t.float    "temperature_air"
    t.float    "temperature_floor"
    t.float    "light"
  end

  create_table "terminals", force: true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.text     "description"
    t.string   "password"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "wifi_name"
    t.string   "wifi_password"
    t.boolean  "wifi_confirmation"
    t.boolean  "irrigation"
    t.datetime "irrigation_start"
    t.datetime "irrigation_end"
  end

  create_table "todos", force: true do |t|
    t.integer  "user_id"
    t.string   "content"
    t.date     "taskdate"
    t.boolean  "done",       default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_hash"
    t.string   "password_salt"
    t.string   "confirmation_token"
    t.boolean  "confirmed",          default: false
    t.string   "session_token"
    t.string   "city"
    t.string   "country"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
