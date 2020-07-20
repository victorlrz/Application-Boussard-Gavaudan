class ChangeColumnNamePortfolios < ActiveRecord::Migration[5.2]
  def change
    rename_column :portfolios, :porfolio, :portfolio
  end
end
