class ChangeFormatToPrice1d < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :price_1chg
    add_column :stocks, :price_1chg, :integer
  end
end
