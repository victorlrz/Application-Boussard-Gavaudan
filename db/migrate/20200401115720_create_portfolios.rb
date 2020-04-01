class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.references :stock, foreign_key: true
      t.datetime :date
      t.string :fund
      t.string :allotment
      t.string :instrument
      t.float :weight
      t.integer :aum

      t.timestamps
    end
  end
end
