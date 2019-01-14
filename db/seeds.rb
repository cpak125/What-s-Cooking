# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

bob_loblaw = User.create!(
    email: 'bob_loblaw@lawblog.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

george_michael = User.create!(
    email: 'george.michael@bluth.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

bob_loblaw.recipes.create!(
    name: "Chicken Piccata",
    ingredients: "2-4 boneless, skinless chicken breast halves (1 1/2 pound total),
    2 Tbsp grated Parmesan cheese,
    1/3 cup flour,
    Salt and pepper,
    4 Tbsp olive oil,
    4 Tbsp butter,
    1/2 cup chicken stock or dry white wine,
    3 Tbsp lemon juice,
    1/4 cup brined capers,
    1/4 cup fresh chopped parsley",
    cal_per_serving: 382,
    servings: 4,
    instructions: "http://simplyrecipes.com/recipes/chicken_piccata/",
    img: "https://www.edamam.com/web-img/cc4/cc489abcab3838196f98dc6b85079f26.jpg"
)

george_michael.recipes.create!(
    name: "Beef Wellington",
    ingredients: "1 lb beef tenderloin fillet,
    Salt and pepper,
    Canola, grapeseed, or olive oil,
    1 lb mushrooms (we used half cremini, half shiitake),
    4 thin slices ham (Parma ham if you can get it) or prosciutto,
    2 Tbsp yellow mustard,
    7 ounces puff pastry (needs 3 hours to defrost in refrigerator if using frozen),
    2 egg yolks, beaten",
    cal_per_serving: 1817,
    servings: 4,
    instructions: "http://simplyrecipes.com/recipes/beef_wellington/",
    img: "https://www.edamam.com/web-img/aba/abae8e4fa053b3b71ab2f937ff2a8a37.jpg"
)