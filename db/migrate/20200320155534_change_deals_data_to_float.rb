class ChangeDealsDataToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :deals, :premium, :float
    change_column :deals, :valuation_multiple, :float
  end
end
