class MarketdatastockJob < ApplicationJob
  queue_as :default

  def perform(identifier)
    response = open("https://markets.ft.com/data/equities/tearsheet/summary?s=#{identifier}").read
    html_doc = Nokogiri::HTML(response)
    portfolio = []
    html_doc.search('.mod-ui-data-list__value').each do |element|
      company = element.text.strip
      portfolio << company
      stock = Stock.find_by identifier: identifier.to_s
      stock.price = portfolio.first
      stock.price_1chg = portfolio[1]
      stock.price_yrchg = portfolio[3]
      stock.beta_ft = portfolio[4]
      stock.save!
    end
    incomestatement = open("https://markets.ft.com/data/equities/tearsheet/profile?s=#{identifier}").read
    doc = Nokogiri::HTML(incomestatement)
    statement = []
    doc.search('.mod-tearsheet-profile-stats').each do |element|
      data = element.text.strip
      statement << data
      stock = Stock.find_by identifier: identifier.to_s
      stock.revenue = statement.first
      stock.save!
    end
    data = open("https://markets.ft.com/data/equities/tearsheet/summary?s=#{identifier}").read
    htmldata_doc = Nokogiri::HTML(data)
    statementdata = []
    htmldata_doc.search('.mod-module__content').each do |element|
      dataft = element.text.strip
      statementdata << dataft
      stock = Stock.find_by identifier: identifier.to_s
      stock.ebitda = statementdata[1]
      stock.save!
    end
  end
end
