class CreateDeals < ActiveRecord::Migration[5.2]
  def change
    create_table :deals do |t|
      t.datetime :date
      t.integer :premium
      t.string :payment_method
      t.integer :valuation_multiple
      t.references :acquirer, foreign_key: true
      t.references :target, foreign_key: true

      t.timestamps
    end
  end
end
