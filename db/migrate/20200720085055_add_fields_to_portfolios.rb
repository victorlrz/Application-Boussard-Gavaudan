class AddFieldsToPortfolios < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :strategy_name, :string
    add_column :portfolios, :porfolio, :string
    add_column :portfolios, :underlying, :string
    add_column :portfolios, :pure_exposure, :decimal
    add_column :portfolios, :long_exposure, :decimal
    add_column :portfolios, :short_exposure, :decimal
    add_column :portfolios, :net_exposure, :decimal
    add_column :portfolios, :sector, :string
    add_column :portfolios, :country, :string
    add_column :portfolios, :equity_at_risk, :decimal
    add_column :portfolios, :ticker_bbg, :string
    add_column :portfolios, :isin, :string
    add_column :portfolios, :asset_value, :decimal
    add_column :portfolios, :long_rho, :decimal
    add_column :portfolios, :short_rho, :decimal
    add_column :portfolios, :net_rho, :decimal
    add_column :portfolios, :long_aifm, :decimal
    add_column :portfolios, :short_aifm, :decimal
    add_column :portfolios, :net_aifm, :decimal
    add_column :portfolios, :market_cap, :float
  end
end
