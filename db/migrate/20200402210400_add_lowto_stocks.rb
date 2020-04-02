class AddLowtoStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :wk52_low, :float
  end
end
