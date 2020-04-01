desc "Run FT market data refresh"
task marketdatastock: :environment do
  stocks = Stock.all
  stocks.each do |stock|
    MarketdatastockJob.perform_later(stock.identifier.to_s)
  end
end
