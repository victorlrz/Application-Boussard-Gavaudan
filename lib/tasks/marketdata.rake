desc "Run FT market data refresh"
task marketdata: :environment do
  targets = Target.all
  targets.each do |target|
    MarketdataJob.perform_later(target.identifier.to_s)
    end
end
