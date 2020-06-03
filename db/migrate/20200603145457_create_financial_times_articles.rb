class CreateFinancialTimesArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :financial_times_articles do |t|
      t.belongs_to :stock
      t.datetime :date
      t.bigint :stock_id
      t.string :title
      t.string :url

      t.timestamps
    end
    add_index :financial_times_articles, :stock_id
  end
end
