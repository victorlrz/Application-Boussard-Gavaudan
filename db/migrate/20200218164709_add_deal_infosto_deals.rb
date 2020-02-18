class AddDealInfostoDeals < ActiveRecord::Migration[5.2]
  def change
    add_column :deals, :deal_value, :integer
    add_column :deals, :deal_currency, :string
  end
end
