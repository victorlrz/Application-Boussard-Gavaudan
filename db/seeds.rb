# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Cleaning database"
  Target.destroy_all
  Acquirer.destroy_all
puts 'Loading database...'


Target.create(
  name: 'Unione di Banche Italiana',
  identifier: 'UBI:MIL',
  sector: 'Banks',
  url: 'https://www.ubibanca.it/pagine/Investor-relations-EN.aspx')


Acquirer.create(
  name: 'Intesa Sanpaolo',
  identifier: 'ISP:MIL',
  sector: 'Banks',
  url: 'https://group.intesasanpaolo.com/en/investor-relations')

puts "done"

