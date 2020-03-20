class AddOfferPriceTo < ActiveRecord::Migration[5.2]
  def change
    add_column :deals, :offer_price, :float
  end
end
