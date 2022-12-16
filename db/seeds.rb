require 'faker'

puts "creating data..."

# Wine.destroy_all
# Order.destroy all
# User.destroy_all
# Comment.destroy_all

puts "creating default wines"

Wine.create(name: "Hall Ranch Cabernet Sauvignon Paso Robles", year: 2019, price: 19.99, product_information: "", brand: "Hall Ranch", country: "USA", region: "California", appelation: "Paso Robles", wine_type: "Red Wine", varietal: "Cabernet Sauvignon", style: "Intense", abv: 15, taste: "Black Currant, Cedar", body: "Full-bodied")
Wine.create(name: "Guy Mousset Cotes du Rhone Reserve", year: 2020, price: 14.99, product_information: "", brand: "Guy Mousset", country: "France", region: "Rhone", appelation: "Cotes du Rhone", wine_type: "Red Wine", varietal: "Rhone Blend", style: "Elegant", abv: 15, taste: "Red Berry, Black Olive", body: "Medium-bodied")
Wine.create(name: "King Maui Marlborough Sauvignon Blanc", year: 2021, price: 11.50, product_information: "", brand: "King Maui", country: " New Zealand", region: "Marlborough", appelation: "", wine_type: "White Wine", varietal: "Sauvignon Blanc", style: "Crisp", abv: 12.5, taste: "Citrus, Herb", body: "Light-bodied")
Wine.create(name: "1858 Pinot Noir Monterey", year: 2021, price: 29.99, product_information: "", brand: "1858", country: "USA", region: "California", appelation: "", wine_type: "Red Wine", varietal: "Pinot Noir", style: "Elegant", abv: 14, taste: "Plum, Cinnamon, Spice",  body: "Medium-bodied")
Wine.create(name: "Crimson Ranch Chardonnay", year: 2020, price: 16.99, product_information: "", brand: "Crimson Ranch", country: "USA", region: "California", appelation: "", wine_type: "White Wine", varietal: "Chardonnay", style: "Oak", abv: 14, taste: "Tropical, Cream", body: "Full-bodied")
Wine.create(name: "Champagne Marie de Moy Grand Cru", year: 2020, price: 47.99, product_information: "", brand: "Champagne Marie de Moy", country: "France", region: "Champagne", appelation: "Champagne Grand Cru", wine_type: "Champagne & Sparkling Wine", varietal: "Champagne, Brut", style: "Dry", abv: 12, taste: "Peach, Citrus", body: "Medium-bodied")
Wine.create(name: "Chateau Feret Lambert Bordeaux Superieur", year: 2019, price: 19.99, product_information: "", brand: "Chateau Feret Lambert", country: "France", region: "Bordeaux", appelation: "Bordeaux/Bordeaux Superieur", wine_type: "Red Wine", varietal: "Bordeaux Blend", style: "Intense", abv: 15, taste: "Raspberry, Black Cherry",  body: "Medium-bodied")
Wine.create(name: "Olema Rose Cotes De Provence", year: 2021, price: 16.99, product_information: "", brand: "Olema", country: "France", region: "Provence", appelation: "", wine_type: "Rose & Blush Wine", varietal: "Rose Blend", style: "Fresh", abv: 13, taste: "Red Berry, Strawberry", body: "Light-bodied")
Wine.create(name: "Renieri Invetro Super Tuscan", year:  2018, price: 18.99, product_information: "", brand: "Renieri", country: "Italy", region: "Tuscany", appelation: "", wine_type: "Red Wine", varietal: "Red Blend", style: " Elegant", abv: 14, taste: "Cherry, Plum", body: "Medium-bodied")
Wine.create(name: "Renieri Invetro SuLaudato Pinot Grigioper Tuscan", year: 2018, price: 16.99, product_information: "", brand: "Laudato", country: "Italy", region: "Veneto", appelation: "", wine_type: "White Wine", varietal: "Pinot Grigio/Pinot Gris", style: "Crisp", abv: 12, taste: "Citrus, Green Apple, Lemon", body: "Medium-bodied") 
Wine.create(name: "Bougrier 'V' Vouvray Chenin Blanc", year: 2019, price: 15.99, product_information: "", brand: "Famille Bougrier", country: "France", region: "Loire", appelation: "Vouvray", wine_type: "White Wine", varietal: "Chenin Blanc", style: "Elegant", abv: 12, taste: "Peach, Pear", body: "Medium-bodied")
Wine.create(name: "Josh Cellars Cabernet Family Reserve North Coast", year: 2020, price: 18.99, product_information: "", brand: "Josh Cellars", country: "USA", region: "California", appelation: "", wine_type: "Red Wine", varietal: "Cabernet Sauvignon", style: "Concentrated", abv: 15, taste: "Cherry, Plum", body: "Medium-bodied")
Wine.create(name: "San Gregorio Single Vineyard Las Martas Garnacha", year: 2020, price: 10.99, product_information: "", brand: "San Gregorio", country: "Spain", region: "Calatayud", appelation: "", wine_type: "Red Wine", varietal: "Grenache", style: "Fresh", abv: 15, taste: "Plum, Berry", body: "Medium-bodied")
Wine.create(name: "Ed Edmundo Chardonnay", year: 2019, price: 9.99, product_information: "", brand: " Ed Edmundo", country: "Argentina", region: "Mendoza", appelation: "", wine_type: "White Wine", varietal: "Chardonnay", style: "Oak", abv: 13, taste: "Butter, Oak, Passionfruit", body: "Medium-bodied")
Wine.create(name: "Ropiteau Pinot Noir", year: 2019, price: 11.99, product_information: "", brand: "Ropiteau", country: "France", region: " Vin De France", appelation: "", wine_type: "Red Wine", varietal: "Pinot Noir", style: "Fresh", abv: 12, taste: "Cherry, Red Fruit", body: "Light-bodied")
Wine.create(name: "Harebrained Cabernet Sauvignon Napa", year: 2018, price: 39.99, product_information: "", brand: " Harebrained", country: "USA", region: "California", appelation: "", wine_type: "Red Wine", varietal: "Cabernet Sauvignon", style: "Concentrated", abv: 14.9, taste: "Dark Fruit, Cocoa, Spice", body: "Full-bodied")
Wine.create(name: "Il Duca Rosa Imperiale", year: 2020, price: 9.99, product_information: "", brand: "Il Duca", country: "Italy", region: "Piedmont", appelation: "", wine_type: "Champagne & Sparkling Wine", varietal: "Sparkling Red Wine", style: "Sweet", abv: 5.5, taste: "Red Berry, Strawberry", body: "Light-bodied")
Wine.create(name: "Altaland Malbec Mendoza", year: 2020, price: 19.99, product_information: "", brand: "Altaland", country: "Argentina", region: "Mendoza", appelation: "", wine_type: "Red Wine", varietal: "Malbec", style: " Elegant", abv: 13.5, taste: "Dark Berry, Red Fruit, Violet", body: "Medium-bodied")
Wine.create(name: "Floorshow Red", year: 2018, price: 33.99, product_information: "", brand: " Floorshow", country: "USA", region: "California", appelation: "", wine_type: "Red Wine", varietal: "Zinfandel", style: "Concentrated", abv: 15.2, taste: "Raspberry, Boysenberry, Spice", body: "Full-bodied")
Wine.create(name: "Borrasca Prosecco Rose", year: 2018, price: 16.99, product_information: "", brand: " Borrasca", country: "Italy", region: " Veneto", appelation: "", wine_type: "Champagne & Sparkling Wine", varietal: "Prosecco, Rose", style: "Crisp", abv: 11, taste: "Floral, Tropical, Strawberry", body: "Light-bodied")

puts "Creating users..."

20.times do
User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        location: Faker::Address.full_address,
        age: rand(5..80),
        username: Faker::Internet.username(specifier: 5..10),
        avatar_img: Faker::Avatar.image,
        password_digest: "12345"
    )
end 

puts "Creating TEST user..."
User.create(first_name: "test", last_name: "test", email: "test", location: "test", age: 40, username: "test", avatar_img: "test", password_digest: "12345" )

puts "Creating comment..."

40.times do
    Comment.create(
        comment: Faker::Lorem.paragraph_by_chars(number: 100, supplemental: false),
        rating: rand(0..5), 
        user_id: rand(1..20), 
        wine_id: rand(1..17)
    )
end

# puts "Creating orders..."
# 20.times do
#     Comment.create(
#         comment: Faker::Lorem.paragraph_by_chars(number: 100, supplemental: false),
#         rating: rand(0..5), 
#         user_id: rand(1..20), 
#         place_id: rand(1..17)
#     )
# end

puts "seeds ready"