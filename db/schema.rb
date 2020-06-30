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

ActiveRecord::Schema.define(version: 2020_06_22_120157) do

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

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "comments", force: :cascade do |t|
    t.datetime "date"
    t.string "source"
    t.bigint "stock_id"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "content"
    t.string "title"
    t.index ["stock_id"], name: "index_comments_on_stock_id"
  end

  create_table "deals", force: :cascade do |t|
    t.datetime "date"
    t.float "premium"
    t.string "payment_method"
    t.float "valuation_multiple"
    t.bigint "acquirer_id"
    t.bigint "target_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "valuation_type"
    t.boolean "bump"
    t.text "comments"
    t.integer "deal_value"
    t.string "deal_currency"
    t.boolean "private"
    t.boolean "rumors"
    t.float "offer_price"
    t.float "ratio_shares"
    t.index ["acquirer_id"], name: "index_deals_on_acquirer_id"
    t.index ["target_id"], name: "index_deals_on_target_id"
  end

  create_table "documents", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "category"
    t.string "title"
    t.datetime "date"
    t.string "owner"
  end

  create_table "financial_times_articles", force: :cascade do |t|
    t.bigint "stock_id"
    t.datetime "date"
    t.string "title"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_financial_times_articles_on_stock_id"
  end

  create_table "fundamentals", force: :cascade do |t|
    t.string "current_price_sales"
    t.string "current_price_earnings"
    t.string "current_price_cashflow"
    t.string "current_price_book"
    t.string "current_price_forward_earnings"
    t.string "current_earning_yield"
    t.string "current_enterprise_value"
    t.string "current_enterprise_value_ebit"
    t.string "current_enterprise_value_ebitda"
    t.bigint "stock_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_fundamentals_on_stock_id"
  end

  create_table "ipos", force: :cascade do |t|
    t.string "name"
    t.string "sector"
    t.string "lead_underwriter"
    t.boolean "direct_listing"
    t.integer "valuation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "date"
  end

  create_table "morning_stars", force: :cascade do |t|
    t.bigint "stock_id"
    t.string "current_price_sales"
    t.string "current_price_earnings"
    t.string "current_price_cashflow"
    t.string "current_price_book"
    t.string "current_price_forward_earnings"
    t.string "current_earning_yield"
    t.string "current_enterprise_value"
    t.string "current_enterprise_value_ebit"
    t.string "current_enterprise_value_ebitda"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_morning_stars_on_stock_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.bigint "stock_id"
    t.datetime "date"
    t.string "fund"
    t.string "allotment"
    t.string "instrument"
    t.float "weight"
    t.integer "aum"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_portfolios_on_stock_id"
  end

  create_table "posts", force: :cascade do |t|
    t.datetime "date"
    t.text "content"
    t.string "category"
    t.bigint "deal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deal_id"], name: "index_posts_on_deal_id"
  end

  create_table "rounds", force: :cascade do |t|
    t.datetime "date"
    t.float "bump"
    t.float "acceptance_threshold"
    t.boolean "success"
    t.bigint "deal_id"
    t.bigint "acquirer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["acquirer_id"], name: "index_rounds_on_acquirer_id"
    t.index ["deal_id"], name: "index_rounds_on_deal_id"
  end

  create_table "scraped_files", force: :cascade do |t|
    t.datetime "date"
    t.bigint "stock_id"
    t.string "title"
    t.string "cloudinary"
    t.string "comment_link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_scraped_files_on_stock_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.string "currency"
    t.string "market_cap"
    t.string "sector"
    t.string "identifier"
    t.string "revenue"
    t.string "ebitda"
    t.string "earning"
    t.integer "net_debt"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "beta_ft"
    t.string "price_yrchg"
    t.string "price_1chg"
    t.float "wk52_low"
  end

  create_table "targets", force: :cascade do |t|
    t.string "name"
    t.string "sector"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.string "ceo"
    t.string "identifier"
    t.text "url"
    t.string "ebitda"
    t.string "revenues"
    t.float "price"
    t.string "price_1chg"
    t.string "price_yrchg"
    t.float "beta_ft"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false, null: false
    t.string "phone_number"
    t.string "location"
    t.string "first_name"
    t.string "last_name"
    t.string "tax_residency"
    t.string "tax_number"
    t.string "source_of_wealth"
    t.string "company"
    t.string "authentication_token", limit: 30
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "comments", "stocks"
  add_foreign_key "deals", "acquirers"
  add_foreign_key "deals", "targets"
  add_foreign_key "fundamentals", "stocks"
  add_foreign_key "morning_stars", "stocks"
  add_foreign_key "portfolios", "stocks"
  add_foreign_key "posts", "deals"
  add_foreign_key "rounds", "acquirers"
  add_foreign_key "rounds", "deals"
end
