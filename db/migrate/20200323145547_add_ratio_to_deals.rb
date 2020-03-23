class AddRatioToDeals < ActiveRecord::Migration[5.2]
  def change
    add_column :deals, :ratio_shares, :float
  end
end
