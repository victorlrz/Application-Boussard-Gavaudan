class AddFoundedToStocks < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :founded, :integer
  end
end
