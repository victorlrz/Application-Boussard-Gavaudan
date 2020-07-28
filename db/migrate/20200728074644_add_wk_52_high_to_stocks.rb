class AddWk52HighToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :wk52_high, :float
  end
end
