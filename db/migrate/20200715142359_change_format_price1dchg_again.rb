class ChangeFormatPrice1dchgAgain < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :price_1chg, :numeric
  end
end
