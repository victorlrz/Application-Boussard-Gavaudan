class AddFieldsToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :beta_ft, :float
    add_column :stocks, :price_yrchg, :string
    add_column :stocks, :price_1chg, :string
  end
end
