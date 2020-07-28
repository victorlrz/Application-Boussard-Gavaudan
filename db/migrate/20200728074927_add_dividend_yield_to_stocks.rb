class AddDividendYieldToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :dividend_yield, :float
  end
end
