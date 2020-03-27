class AddPriceChgYrToTargets < ActiveRecord::Migration[5.2]
  def change
    add_column :targets, :price_yrchg, :string
  end
end
