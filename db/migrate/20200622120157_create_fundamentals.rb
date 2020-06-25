class CreateFundamentals < ActiveRecord::Migration[5.2]
  def change
    create_table :fundamentals do |t|
      t.string :current_price_sales
      t.string :current_price_earnings
      t.string :current_price_cashflow
      t.string :current_price_book
      t.string :current_price_forward_earnings
      t.string :current_earning_yield
      t.string :current_enterprise_value
      t.string :current_enterprise_value_ebit
      t.string :current_enterprise_value_ebitda
      t.references :stock, foreign_key: true

      t.timestamps
    end
  end
end
