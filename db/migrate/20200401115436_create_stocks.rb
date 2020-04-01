class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name
      t.float :price
      t.string :currency
      t.integer :market_cap
      t.string :sector
      t.string :identifier
      t.integer :revenue
      t.integer :ebitda
      t.integer :earning
      t.integer :net_debt
      t.string :description

      t.timestamps
    end
  end
end
