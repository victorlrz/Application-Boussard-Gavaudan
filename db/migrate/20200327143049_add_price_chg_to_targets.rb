class AddPriceChgToTargets < ActiveRecord::Migration[5.2]
  def change
    add_column :targets, :price_1chg, :string
  end
end
