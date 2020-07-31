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
      stock.price_1chg = portfolio[1].split(" / ").last.to_f unless portfolio[1].nil?
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
    descriptionurl = open("https://markets.ft.com/data/equities/tearsheet/profile?s=#{identifier}").read
    descriptiondoc = Nokogiri::HTML(descriptionurl)
    description = []
    descriptiondoc.search('.mod-tearsheet-profile-description').each do |element|
      datadescription = element.text.strip
      description << datadescription
      stock = Stock.find_by identifier: identifier.to_s
      stock.earning = description.last
      stock.save!
    end
    descrurl = open("https://markets.ft.com/data/equities/tearsheet/profile?s=#{identifier}").read
    descrdoc = Nokogiri::HTML(descrurl)
    descr = []
    descrdoc.search('body > div.o-grid-container.mod-container > div:nth-child(2) > section.mod-main-content > div:nth-child(2) > div > div > ul.mod-tearsheet-profile-stats.mod-tearsheet-profile-section.mod-tearsheet-profile__extra__content > li:nth-child(3) > span.mod-ui-data-list__value').each do |element|
      datadescr = element.text.strip
      descr << datadescr
      stock = Stock.find_by identifier: identifier.to_s
      stock.description = descr.last
      stock.save!
    end
    url_52_week_low = "https://markets.ft.com/data/equities/tearsheet/summary?s=#{identifier}"
    # The open method takes in our URL string, and returns to us the HTML from that page
    html_52_week_low = open(url_52_week_low)
    #Nokogiri's HTML method then takes in our HTML as an our argument, and returns to us a set of nodes
    doc_52_week_low = Nokogiri::HTML(html_52_week_low)
    selector_52_week_low = doc_52_week_low.css("body > div.o-grid-container.mod-container > div:nth-child(3) > section > div:nth-child(4) > div > div > div.mod-tearsheet-key-stats__graphics > div:nth-child(2) > div > div > div.mod-ui-range-bar__container__labels > span.mod-ui-range-bar__container__label--lo > span.mod-ui-range-bar__container__value")
      data_52_week_low = selector_52_week_low.text.strip.to_f
      stock = Stock.find_by identifier: identifier.to_s
      stock.wk52_low = data_52_week_low
      stock.save!

    url_52_week_high = "https://markets.ft.com/data/equities/tearsheet/summary?s=#{identifier}"
    # The open method takes in our URL string, and returns to us the HTML from that page
    html_52_week_high = open(url_52_week_high)
    #Nokogiri's HTML method then takes in our HTML as an our argument, and returns to us a set of nodes
    doc_52_week_high = Nokogiri::HTML(html_52_week_high)
    selector_52_week_high = doc_52_week_high.css("body > div.o-grid-container.mod-container > div:nth-child(3) > section > div:nth-child(4) > div > div > div.mod-tearsheet-key-stats__graphics > div:nth-child(2) > div > div > div.mod-ui-range-bar__container__labels > span.mod-ui-range-bar__container__label--hi > span.mod-ui-range-bar__container__value")
      data_52_week_high = selector_52_week_high.text.strip.to_f
      stock = Stock.find_by identifier: identifier.to_s
      stock.wk52_high = data_52_week_high
      stock.save!

    url_annual_div_yield = "https://markets.ft.com/data/equities/tearsheet/summary?s=#{identifier}"
    # The open method takes in our URL string, and returns to us the HTML from that page
    html_annual_div_yield = open(url_annual_div_yield)
    #Nokogiri's HTML method then takes in our HTML as an our argument, and returns to us a set of nodes
    doc_annual_div_yield = Nokogiri::HTML(html_annual_div_yield)
    selector_annual_div_yield = doc_annual_div_yield.css("body > div.o-grid-container.mod-container > div:nth-child(3) > section > div:nth-child(4) > div > div > div.mod-tearsheet-key-stats__data > div:nth-child(3) > table").css('td')[1]
      data_annual_div_yield = selector_annual_div_yield.text.strip.to_f
      stock = Stock.find_by identifier: identifier.to_s
      stock.dividend_yield = data_annual_div_yield
      stock.save!

  end
end
