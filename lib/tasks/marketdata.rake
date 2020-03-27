task marketdata: :environment do
  @targets.all.each do |target|
    response = open("https://markets.ft.com/data/equities/tearsheet/summary?s=#{target.identifier}").read
    html_doc = Nokogiri::HTML(response)
    portfolio = []
    html_doc.search('.mod-ui-data-list__value').each do |element|
      company = element.text.strip
      portfolio << company
      target = target.find(identifier = target.identifier.to_s)
      target.price = portfolio.first
      target.save
    end
  end
end
