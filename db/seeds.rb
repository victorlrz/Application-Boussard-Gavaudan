# Stock.destroy_all

# Stock.create!([{
#   id: 1, 
#   name: 'ASOS', 
#   price: 2.0, 
#   currency: 'EUR' , 
#   market_cap: "2.33bn GBP", 
#   sector: "Retail", 
#   identifier: "ASC:LSE", 
#   revenue: "3.02bn", 
#   ebitda: "Xbn", 
#   earning: "Ybn", 
#   net_debt: 163.9, 
#   description: "Asos PLC is a global fashion destination for a range of things. The Company sells and offers a range of fashion-related content on ASOS.com. The Company's segments include UK, US, EU and RoW. It sells over 85,000 branded and own-label products through localized mobile and Web experiences, delivering from its fulfilment centers in the United Kingdom, the United States, Europe and across the world. It offers approximately 75,000 separate clothing ranges, spanning women's wear and menswear, footwear and accessories, alongside its jewelry and beauty collections. The Company's collection of specialist own-label lines includes ASOS Curve, ASOS Maternity, ASOS Tall and ASOS Petite. The Company caters a range of customer segments and sizes, across all categories and price points. It also operates returns centers in Australia and Poland. It operates country-specific Websites in Australia, France, Germany, Italy, Spain, Russia and the Unites States.", 
#   created_at: 07/04/20, 
#   updated_at: 07/04/20, 
#   beta_ft: 2.7032, 
#   price_yrchg: "-41.16%", 
#   price_1chg: "0.00%", 
#   wk52_low: 43.85,

# },
# {
#   id: 2, 
#   name: 'COMPAGNIE GENERALE DE GEOPHYSIQUE', 
#   price: 1.14, 
#   currency: 'EUR' , 
#   market_cap: "817.65m EUR", 
#   sector: "Retail", 
#   identifier: "CGG:PAR", 
#   revenue: "1.25bn", 
#   ebitda: "Xbn", 
#   earning: "Ybn", 
#   net_debt: 733, 
#   description: "CGG SA (CGG) is a manufacturer of geophysical equipment. The Company provides marine, land and airborne data acquisition services, as well as a range of other geoscience services, including data imaging, geoscience and petroleum engineering consulting services, and collecting, developing and licensing geological data. Its segments include Contractual Data Acquisition; Geology, Geophysics & Reservoir (GGR); Equipment, and Non-Operated Resources. The Contractual Data Acquisition includes marine, and land and multi-physics. Its GGR segment includes the Multi-client business line and the Subsurface Imaging and Reservoir business lines (processing and imaging of geophysical data, reservoir characterization, geophysical consulting and software services, geological data library and data management solutions). The Equipment segment consists of its manufacturing and sales activities for seismic equipment. It operates through Saturno, a multi-client survey over Santos Basin Offshore Brazil.", 
#   created_at: 06/04/20, 
#   updated_at: 06/04/20, 
#   beta_ft: 2.5811, 
#   price_yrchg: "-28.00%", 
#   price_1chg: "0.00%", 
#   wk52_low: 7.50,

# }])

# p"Created #{Stock.count} stocks"

# Target.destroy_all

# Target.create!([{
#   id: 1, 
#   name: "Just Eat", 
#   sector: "Food delivery", 
#   created_at: 07/04/20, 
#   updated_at: 07/04/20, 
#   description: "Just Eat, formerly Allo Resto in France, is a British ready meal delivery company. It is the number one restaurant delivery company in France with the acquisition of Allo Resto.", 
#   ceo: "Peter Duffy", 
#   identifier: "JET:LSE", 
#   url: "https://www.just-eat.fr/", 
#   ebitda: "Xbn", 
#   revenues: "Ybn", 
#   price: 8.0, 
#   price_1chg: "22.94%", 
#   price_yrchg: "22.94%", 
#   beta_ft: 0.4374
# },
# {
#   id: 2, 
#   name: "Tiffany&Co", 
#   sector: "Retail", 
#   created_at: 07/04/20, 
#   updated_at: 07/04/20, 
#   description: "Tiffany&Co is an American jewellery and tableware company founded by Charles Lewis Tiffany (father of Louis Comfort Tiffany) and John B. Young on September 18, 1837 in Manhattan, New York. ", 
#   ceo: "Alessandro Bogliolo", 
#   identifier: "TIF:NYQ", 
#   url: "https://www.tiffany.fr/", 
#   ebitda: "Xbn", 
#   revenues: "Ybn", 
#   price: 127.46, 
#   price_1chg: "16.35%", 
#   price_yrchg: "16.35%%", 
#   beta_ft: 1.0293
# }])

# p"Created #{Target.count} targets"

# Acquirer.destroy_all

# Acquirer.create!([{
#   id: 1, 
#   name: "LVMH", 
#   identifier: "LVMH:MIL", 
#   sector: "Retail", 
#   url: "https://www.lvmh.fr/", 
#   created_at: 07/04/20, 
#   updated_at: 07/04/20
# },
# {
#   id: 2, 
#   name: "Takeaway.com", 
#   identifier: "TKWY:AEX", 
#   sector: "Food & Delivery", 
#   url: "https://www.takeaway.com/", 
#   created_at: 07/04/20, 
#   updated_at: 07/04/20
# }])

# p"Created #{Acquirer.count} acquirers"

# Deal.destroy_all

# Deal.create!([{
#   id: 1, 
#   date: Date.new(2019,10,26), 
#   premium: 37.0, 
#   payment_method: "Cash", 
#   valuation_multiple: 17.0, 
#   acquirer_id: 1, 
#   target_id: 2, 
#   valuation_type: "EBITDA", 
#   bump: false, 
#   comments: "Deal valuation 50% above TIF 10-yr AVG 2) There is no real big companies for sale, TIF is the only big one 3) will catapult LVMH to the top of the rankings for market share in branded jewellery, one of the best-performing luxury categories in 2018 4) LVMH will more than double its market share in jewellery to 18.4 per cent, ahead of Richmont 5) growing firepower of LVMH, which generated €46.8bn in sales and €5.5bn in free cash flow last year. After its shares rose 60 per cent this year, it now has a market value of more than €200bn, comfortably the biggest public company in France. LVMH will issue bonds to finance the acquisition and said it expected it to be earnings accretive from next year, adding €500m-€600m to operating profit as of 2020.", 
#   deal_value: 14700,
#   deal_currency: "USD", 
#   private: false, 
#   rumors: false, 
#   offer_price: 135, 
#   ratio_shares: 1.00
# },
# {
#   id: 2, 
#   date: Date.new(2019,10,26), 
#   premium: 37.0, 
#   payment_method: "Cash", 
#   valuation_multiple: 7.84, 
#   acquirer_id: 2, 
#   target_id: 1, 
#   valuation_type: "EBITDA", 
#   bump: false, 
#   comments: "Takeaway.com has beaten Naspers in its months-long battle for Just Eat, after winning the backing of shareholders in the London-based food ordering pioneer for its £6bn takeover. Investors holding stock worth more than 80 per cent of Just Eat had accepted Takeaway.com’s all-share offer, which had been raised in late December in response to a sweetened counterbid from Naspers’ international dealmaking unit, Prosus. Just Eat shareholders roundly rejected Prosus’ 800p-a-share offer, with holders owning just 0.02 per cent of the company accepting the £5.5bn all-cash deal before it lapsed on Friday. Source - Financial Time", 
#   deal_value: 7000,
#   deal_currency: "EUR", 
#   private: false, 
#   rumors: false, 
#   offer_price: 800, 
#   ratio_shares: 1.00
# }])

# p"Created #{Deal.count} deals"


# Portfolio.destroy_all

Portfolio.create!([{
  id: 1, 
  stock_id: 1, 
  date: Date.new(2020,4,7), 
  fund: "BGLTV", 
  weight: 4.31, 
  aum: 49470067.62, 
}])

p"Created #{Portfolio.count} portfolios" 

# Comment.destroy_all

# Comment.create!([{
#   id: 1, 
#   date: Date.new(2020,4,7), 
#   source: "", 
#   stock_id: 1, 
#   category: "", 
#   created_at: Date.new(2020,4,7), 
#   updated_at: Date.new(2020,4,7), 
#   content: "Coucou c'est un test du premier stock",
#   is_scraped_file: false,
#   is_scraped_news: false
# },
# {
#   id: 2, 
#   date: Date.new(2020,4,7), 
#   source: "", 
#   stock_id: 1, 
#   category: "", 
#   created_at: Date.new(2020,4,7), 
#   updated_at: Date.new(2020,4,7), 
#   content: "Coucou c'est un second test du premier stock",
#   is_scraped_file: false,
#   is_scraped_news: false
# },
# { 
#   id: 3, 
#   date: Date.new(2020,4,7), 
#   source: "", 
#   stock_id: 1, 
#   category: "", 
#   created_at: Date.new(2020,4,7), 
#   updated_at: Date.new(2020,4,7), 
#   content: "Coucou c'est un test du deuxième stock",
#   title:"Document d'enregistrement universel 2019",
#   is_scraped_file: false,
#   is_scraped_news: false

# }])

# p"Created #{Comment.count} comments"