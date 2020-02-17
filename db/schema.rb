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

ActiveRecord::Schema.define(version: 2020_02_17_184557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "acquirers", force: :cascade do |t|
    t.string "name"
    t.string "identifier"
    t.string "sector"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "deals", force: :cascade do |t|
    t.datetime "date"
    t.integer "premium"
    t.string "payment_method"
    t.integer "valuation_multiple"
    t.bigint "acquirer_id"
    t.bigint "target_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["acquirer_id"], name: "index_deals_on_acquirer_id"
    t.index ["target_id"], name: "index_deals_on_target_id"
  end

  create_table "targets", force: :cascade do |t|
    t.string "name"
    t.string "identifier"
    t.string "sector"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "deals", "acquirers"
  add_foreign_key "deals", "targets"
end
