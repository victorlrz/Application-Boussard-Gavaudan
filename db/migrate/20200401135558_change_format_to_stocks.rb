class ChangeFormatToStocks < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :ebitda, :string
    change_column :stocks, :revenue, :string
    change_column :stocks, :price_1chg, :string
    change_column :stocks, :price_yrchg, :string
    change_column :stocks, :earning, :string
    change_column :stocks, :market_cap, :string
  end
end
