class MarketdataJob < ApplicationJob
  queue_as :default

  def perform(identifier)
    response = open("https://markets.ft.com/data/equities/tearsheet/summary?s=#{identifier}").read
    html_doc = Nokogiri::HTML(response)
    portfolio = []
    html_doc.search('.mod-ui-data-list__value').each do |element|
      company = element.text.strip
      portfolio << company
      target = Target.find_by identifier: identifier.to_s
      target.price = portfolio.first
      target.price_1chg = portfolio[1]
      target.price_yrchg = portfolio[3]
      target.beta_ft = portfolio[4]
      target.save!
    end
    # Do something later
  end
end
