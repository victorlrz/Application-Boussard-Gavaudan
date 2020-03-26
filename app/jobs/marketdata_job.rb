class MarketdataJob < ApplicationJob
  queue_as :default

  def perform(target)
    response = open("https://markets.ft.com/data/equities/tearsheet/summary?s=#{target.identifier}").read
    html_doc = Nokogiri::HTML(response)
    portfolio = []
    html_doc.search('.mod-ui-data-list__value').each do |element|
      company = element.text.strip
      portfolio << company
    end
    # Do something later
  end
end
