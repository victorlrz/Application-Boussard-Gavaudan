# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# stock = Stock.find_by(name:'ATOS').id
# stock2 = Portfolio.new( stock_id: stock, date:'03/04/2020', fund:'BGLTV', weight:4.26, aum:48684295.28)
# stock2.save

# stock_alstom = Stock.find_by(name:'ALSTOM').id
# stock = Portfolio.new(stock_id: stock_alstom, date:'03/04/2020', fund:'BGLTV', weight:4.23, aum:48684295.28)
# stock.save
puts "delete Portfolio"
Portfolio.destroy_all
puts "Start with a new portfolio"
stock_1= Stock.find_by(name:'ALSTOM').id
stock_2= Stock.find_by(name:'ATOS').id
stock_3= Stock.find_by(name:'AKZO NOBEL').id
stock_4= Stock.find_by(name:'SAP AG').id
stock_5= Stock.find_by(name:'ROCHE HOLDING AG-GENUSSCHEIN').id
stock_6= Stock.find_by(name:'SANOFI').id
stock_7= Stock.find_by(name:'AXA SA').id
stock_8= Stock.find_by(name:'BAYER AG-REG').id
stock_9= Stock.find_by(name:'SMITH NEPHEW PLC').id
stock_10= Stock.find_by(name:'CRODA INTERNATIONAL PLC').id
stock_11= Stock.find_by(name:'DANONE').id
stock_12= Stock.find_by(name:'RSA INSURANCE GROUP PLC').id
stock_13= Stock.find_by(name:'SAFRAN SA').id
stock_14= Stock.find_by(name:'VODAFONE GROUP PLC').id
stock_15= Stock.find_by(name:'TOTAL SA').id
stock_16= Stock.find_by(name:'BNP PARIBAS SA').id
stock_17= Stock.find_by(name:'ROYAL DUTCH PETROLEUM CO EUR (RDS A)').id
stock_18= Stock.find_by(name:'COMPAGNIE DE SAINT-GOBAIN').id
stock_19= Stock.find_by(name:'INTERCONTINENTAL HOTELS GROU').id
stock_20= Stock.find_by(name:'OSRAM LICHT AG').id
stock_21= Stock.find_by(name:'VIVENDI').id
stock_22= Stock.find_by(name:'BANCO SANTANDER SA').id
stock_23= Stock.find_by(name:'COMPAGNIE GENERALE DE GEOPHYSIQUE').id
stock_24= Stock.find_by(name:'ENGIE').id
stock_25= Stock.find_by(name:'SPIE SA').id
stock_26= Stock.find_by(name:'BUREAU VERITAS SA').id
stock_27= Stock.find_by(name:'KONINKLIJKE KPN NV').id
stock_28= Stock.find_by(name:'THALES SA').id
stock_29= Stock.find_by(name:'INNOGY SE').id
stock_30= Stock.find_by(name:'WIRECARD AG').id
stock_31= Stock.find_by(name:'ABN AMRO GROUP N.V').id
stock_32= Stock.find_by(name:'FERROVIAL SA').id
stock_33= Stock.find_by(name:'DASSAULT AVIATION SA').id
stock_34= Stock.find_by(name:'BARCLAYS PLC').id
stock_35= Stock.find_by(name:'FAURECIA').id
stock_36= Stock.find_by(name:'QIAGEN N.V.').id
stock_37= Stock.find_by(name:'KONINKLIJKE DSM NV').id
stock_38= Stock.find_by(name:'INGENICO').id
stock_39= Stock.find_by(name:'EDF').id
stock_40= Stock.find_by(name:'UNIPER').id
stock_41= Stock.find_by(name:'GROUPE EUROTUNNEL SA - REGR').id
stock_42= Stock.find_by(name:'SUEZ ENVIRONNEMENT CO').id
stock_43= Stock.find_by(name:'PRUDENTIAL PLC').id
stock_44= Stock.find_by(name:'GRUBHUB INC').id
stock_45= Stock.find_by(name:'AMS AG').id
stock_46= Stock.find_by(name:'CONSTELLIUM NV').id
stock_47= Stock.find_by(name:'VINCI SA').id
stock_48= Stock.find_by(name:'CERVED INFO SOL').id
stock_49= Stock.find_by(name:'PLAYTECH LTD').id
stock_50= Stock.find_by(name:'CAIXA BANK - EX CRITERIA CAIXACORP SA').id
stock_51= Stock.find_by(name:'ANIMA HOLDING SP').id
stock_bis_1=Portfolio.new(stock_id:stock_1, date:'07/04/2020', fund:'BGLTV', weight:4.31, aum:49470067.62)
stock_bis_2=Portfolio.new(stock_id:stock_2, date:'07/04/2020', fund:'BGLTV', weight:4.04, aum:49470067.62)
stock_bis_3=Portfolio.new(stock_id:stock_3, date:'07/04/2020', fund:'BGLTV', weight:3.86, aum:49470067.62)
stock_bis_4=Portfolio.new(stock_id:stock_4, date:'07/04/2020', fund:'BGLTV', weight:3.86, aum:49470067.62)
stock_bis_5=Portfolio.new(stock_id:stock_5, date:'07/04/2020', fund:'BGLTV', weight:3.53, aum:49470067.62)
stock_bis_6=Portfolio.new(stock_id:stock_6, date:'07/04/2020', fund:'BGLTV', weight:3.50, aum:49470067.62)
stock_bis_7=Portfolio.new(stock_id:stock_7, date:'07/04/2020', fund:'BGLTV', weight:3.06, aum:49470067.62)
stock_bis_8=Portfolio.new(stock_id:stock_8, date:'07/04/2020', fund:'BGLTV', weight:3.02, aum:49470067.62)
stock_bis_9=Portfolio.new(stock_id:stock_9, date:'07/04/2020', fund:'BGLTV', weight:2.99, aum:49470067.62)
stock_bis_10=Portfolio.new(stock_id:stock_10, date:'07/04/2020', fund:'BGLTV', weight:2.81, aum:49470067.62)
stock_bis_11=Portfolio.new(stock_id:stock_11, date:'07/04/2020', fund:'BGLTV', weight:2.80, aum:49470067.62)
stock_bis_12=Portfolio.new(stock_id:stock_12, date:'07/04/2020', fund:'BGLTV', weight:2.72, aum:49470067.62)
stock_bis_13=Portfolio.new(stock_id:stock_13, date:'07/04/2020', fund:'BGLTV', weight:2.59, aum:49470067.62)
stock_bis_14=Portfolio.new(stock_id:stock_14, date:'07/04/2020', fund:'BGLTV', weight:2.52, aum:49470067.62)
stock_bis_15=Portfolio.new(stock_id:stock_15, date:'07/04/2020', fund:'BGLTV', weight:2.45, aum:49470067.62)
stock_bis_16=Portfolio.new(stock_id:stock_16, date:'07/04/2020', fund:'BGLTV', weight:2.41, aum:49470067.62)
stock_bis_17=Portfolio.new(stock_id:stock_17, date:'07/04/2020', fund:'BGLTV', weight:2.39, aum:49470067.62)
stock_bis_18=Portfolio.new(stock_id:stock_18, date:'07/04/2020', fund:'BGLTV', weight:2.37, aum:49470067.62)
stock_bis_19=Portfolio.new(stock_id:stock_19, date:'07/04/2020', fund:'BGLTV', weight:2.28, aum:49470067.62)
stock_bis_20=Portfolio.new(stock_id:stock_20, date:'07/04/2020', fund:'BGLTV', weight:2.24, aum:49470067.62)
stock_bis_21=Portfolio.new(stock_id:stock_21, date:'07/04/2020', fund:'BGLTV', weight:2.14, aum:49470067.62)
stock_bis_22=Portfolio.new(stock_id:stock_22, date:'07/04/2020', fund:'BGLTV', weight:2.12, aum:49470067.62)
stock_bis_23=Portfolio.new(stock_id:stock_23, date:'07/04/2020', fund:'BGLTV', weight:2.11, aum:49470067.62)
stock_bis_24=Portfolio.new(stock_id:stock_24, date:'07/04/2020', fund:'BGLTV', weight:2.03, aum:49470067.62)
stock_bis_25=Portfolio.new(stock_id:stock_25, date:'07/04/2020', fund:'BGLTV', weight:1.98, aum:49470067.62)
stock_bis_26=Portfolio.new(stock_id:stock_26, date:'07/04/2020', fund:'BGLTV', weight:1.98, aum:49470067.62)
stock_bis_27=Portfolio.new(stock_id:stock_27, date:'07/04/2020', fund:'BGLTV', weight:1.97, aum:49470067.62)
stock_bis_28=Portfolio.new(stock_id:stock_28, date:'07/04/2020', fund:'BGLTV', weight:1.88, aum:49470067.62)
stock_bis_29=Portfolio.new(stock_id:stock_29, date:'07/04/2020', fund:'BGLTV', weight:1.86, aum:49470067.62)
stock_bis_30=Portfolio.new(stock_id:stock_30, date:'07/04/2020', fund:'BGLTV', weight:1.71, aum:49470067.62)
stock_bis_31=Portfolio.new(stock_id:stock_31, date:'07/04/2020', fund:'BGLTV', weight:1.69, aum:49470067.62)
stock_bis_32=Portfolio.new(stock_id:stock_32, date:'07/04/2020', fund:'BGLTV', weight:1.62, aum:49470067.62)
stock_bis_33=Portfolio.new(stock_id:stock_33, date:'07/04/2020', fund:'BGLTV', weight:1.61, aum:49470067.62)
stock_bis_34=Portfolio.new(stock_id:stock_34, date:'07/04/2020', fund:'BGLTV', weight:1.56, aum:49470067.62)
stock_bis_35=Portfolio.new(stock_id:stock_35, date:'07/04/2020', fund:'BGLTV', weight:1.48, aum:49470067.62)
stock_bis_36=Portfolio.new(stock_id:stock_36, date:'07/04/2020', fund:'BGLTV', weight:1.38, aum:49470067.62)
stock_bis_37=Portfolio.new(stock_id:stock_37, date:'07/04/2020', fund:'BGLTV', weight:1.36, aum:49470067.62)
stock_bis_38=Portfolio.new(stock_id:stock_38, date:'07/04/2020', fund:'BGLTV', weight:1.32, aum:49470067.62)
stock_bis_39=Portfolio.new(stock_id:stock_39, date:'07/04/2020', fund:'BGLTV', weight:1.27, aum:49470067.62)
stock_bis_40=Portfolio.new(stock_id:stock_40, date:'07/04/2020', fund:'BGLTV', weight:1.20, aum:49470067.62)
stock_bis_41=Portfolio.new(stock_id:stock_41, date:'07/04/2020', fund:'BGLTV', weight:1.14, aum:49470067.62)
stock_bis_42=Portfolio.new(stock_id:stock_42, date:'07/04/2020', fund:'BGLTV', weight:1.07, aum:49470067.62)
stock_bis_43=Portfolio.new(stock_id:stock_43, date:'07/04/2020', fund:'BGLTV', weight:1.07, aum:49470067.62)
stock_bis_44=Portfolio.new(stock_id:stock_44, date:'07/04/2020', fund:'BGLTV', weight:1.07, aum:49470067.62)
stock_bis_45=Portfolio.new(stock_id:stock_45, date:'07/04/2020', fund:'BGLTV', weight:1.04, aum:49470067.62)
stock_bis_46=Portfolio.new(stock_id:stock_46, date:'07/04/2020', fund:'BGLTV', weight:0.96, aum:49470067.62)
stock_bis_47=Portfolio.new(stock_id:stock_47, date:'07/04/2020', fund:'BGLTV', weight:0.96, aum:49470067.62)
stock_bis_48=Portfolio.new(stock_id:stock_48, date:'07/04/2020', fund:'BGLTV', weight:0.90, aum:49470067.62)
stock_bis_49=Portfolio.new(stock_id:stock_49, date:'07/04/2020', fund:'BGLTV', weight:0.86, aum:49470067.62)
stock_bis_50=Portfolio.new(stock_id:stock_50, date:'07/04/2020', fund:'BGLTV', weight:0.72, aum:49470067.62)
stock_bis_51=Portfolio.new(stock_id:stock_51, date:'07/04/2020', fund:'BGLTV', weight:0.32, aum:49470067.62)
stock_bis_1.save
stock_bis_2.save
stock_bis_3.save
stock_bis_4.save
stock_bis_5.save
stock_bis_6.save
stock_bis_7.save
stock_bis_8.save
stock_bis_9.save
stock_bis_10.save
stock_bis_11.save
stock_bis_12.save
stock_bis_13.save
stock_bis_14.save
stock_bis_15.save
stock_bis_16.save
stock_bis_17.save
stock_bis_18.save
stock_bis_19.save
stock_bis_20.save
stock_bis_21.save
stock_bis_22.save
stock_bis_23.save
stock_bis_24.save
stock_bis_25.save
stock_bis_26.save
stock_bis_27.save
stock_bis_28.save
stock_bis_29.save
stock_bis_30.save
stock_bis_31.save
stock_bis_32.save
stock_bis_33.save
stock_bis_34.save
stock_bis_35.save
stock_bis_36.save
stock_bis_37.save
stock_bis_38.save
stock_bis_39.save
stock_bis_40.save
stock_bis_41.save
stock_bis_42.save
stock_bis_43.save
stock_bis_44.save
stock_bis_45.save
stock_bis_46.save
stock_bis_47.save
stock_bis_48.save
stock_bis_49.save
stock_bis_50.save
stock_bis_51.save
puts "new portfolio created"
