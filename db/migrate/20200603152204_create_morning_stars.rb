class CreateMorningStars < ActiveRecord::Migration[5.2]
  def change
    create_table :morning_stars do |t|
      t.datetime :date
      t.bigint :stock_id
      t.string :currentPriceSales
      t.string :currentPriceEarnings
      t.string :currentPriceCashFlow
      t.string :currentPriceBook
      t.string :currentPriceForwardEarnings
      t.string :currentEarningYield
      t.string :currentEnterpriseValue
      t.string :currentEnterpriseValueEbit
      t.string :currentEnterpriseValueEbitda

      t.timestamps
    end
    add_index :morning_stars, :stock_id
  end
end
