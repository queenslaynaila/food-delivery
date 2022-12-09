puts "printing catefgories"
Category.create([
  {
    category_name: "Pizza",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png"
  },
  {
    category_name: "Fastfood",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png"
  },
  {
    category_name: "Drinks",
    image_url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
  },
  {
    category_name: "Coffee & Tea",
    image_url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
  },
  {
    category_name: "Chicken",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png"
  },
  {
    category_name: "Burgers",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Burger_BrowseHome@3x.png"
  },
  {
    category_name: "Snacks",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Burger_BrowseHome@3x.png"
  },
  {
    category_name: "Sharing",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Burger_BrowseHome@3x.png"
  }
])
puts "printing customers"
Customer.create([
  {

  username:"queenslayjema",
  email:"queenslayjema@gmail.com",
  password:"q",
  phonenumber:"0713518356",

}
])
puts "printing resta"

Restaurant.create([
  {
    name:'KFC',
    description:'Our food is fingerlicking good',
    address:'Junction',
    food_type:'Fastfood',
    image_url:'https://d1ralsognjng37.cloudfront.net/7a994894-7763-4cc6-a077-c0ae6c4d9439.jpeg',
    open_time: '8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Chicken inn',
    description:'Luv dat Chickenn!',
    address:'Nairobi cbd',
    food_type:'Fastfood',
    image_url:'https://d1ralsognjng37.cloudfront.net/7a994894-7763-4cc6-a077-c0ae6c4d9439.jpeg',
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Pizza Mojo',
    description:'Luv dat pizza',
    address:'JUnction mall',
    food_type:'Fastfood',
    image_url:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yZThmZTQ4MS00ZDVhLTRlNDktYmU1MS03M2RiNjMxNzRlZjkuanBlZw==',
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Java',
    description:'Luv dat coffee',
    address:'Greenspan mall',
    image_url:'https://d1ralsognjng37.cloudfront.net/dc93e9f6-7819-48ea-9ba4-6da98ae89d37.jpeg',
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Burger King',
    address:'Nairobi cbd',
    image_url:'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_30/Stores/lphwgvgm9qvmwmqlstsy',
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Js Burgers And Ribs',
    address:'Ngong road',
    image_url:"https://eatout.co.ke/wp-content/uploads/2021/12/Burger-Fries.jpg",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Galitos',
    description:'Luv dat grill',
    address:'Ngong Road',
    food_type:"Fast food",
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC83Y2ZlOGYyZi04MzI2LTRkY2YtODZjYi1lYjgyNTNlMGE3ZTUuanBlZw==",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'FINGER LICKING RIBS AND WINGS KILIMANI',
    description:'Luv dat grill',
    address:'Kilimani',
    food_type:"Fast food",
    image_url:"https://tb-static.uber.com/prod/image-proc/processed_images/784a3a0945df8dc36308e522fb18962a/16bb0a3ab8ea98cfe8906135767f7bf4.webp",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Foodfunk',
    description:'Luv dat grill',
    address:'Ngong Road',
    food_type:"Comfort food",
    image_url:"https://d1ralsognjng37.cloudfront.net/558202cf-9c59-4c9d-a4ab-e091448c9181.jpeg",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'The Meat Pot - Jamhuri',
    description:'Luv dat grill',
    address:'Jamhuri',
    food_type:"Fast food",
    image_url:"https://d1ralsognjng37.cloudfront.net/894ce837-064d-474b-9b12-747bf67a165a.webp",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Tipsys Choma',
    description:'Luv dat grill',
    address:'Ngong Road',
    food_type:"Kenyan",
    image_url:"https://d1ralsognjng37.cloudfront.net/894ce837-064d-474b-9b12-747bf67a165a.webp",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Galitos',
    description:'Luv dat grill',
    address:'Ngong Road',
    food_type:"Fast food",
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC83Y2ZlOGYyZi04MzI2LTRkY2YtODZjYi1lYjgyNTNlMGE3ZTUuanBlZw==",
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
])
puts "printing menus"

Menu.create([
  {
    menu_name:"Streetwise 1",
    category_id:2,
    restaurant_id:1,
    description:"1 Chicken Piece with Regular Chips",
    price:370,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
    status:"available"
  },
  {
    menu_name:"Streetwise 2",
    category_id: 2,
    restaurant_id:1,
    description:"2 Chicken Piece with Regular Chips",
    price:450,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
    status:"available"
  },
  {
    menu_name:"Streetwise 3",
    category_id:2,
    restaurant_id:1,
    description:"3 Chicken Piece with Regular Chips",
    price:650,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
    status:"available"
  },
  {
    menu_name:"4 Zinger Wings",
    category_id:7,
    restaurant_id:1,
    description:"4 Hot and Crispy Wings.",
    price:490,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hODRiYmJhZi01MjY0LTRmNmYtYmY0MC1jODVhMzc0ZDFkZmIuanBlZw==",
    status:"available"
  },
  {
    menu_name:"8 Zinger Wings",
    category_id:7,
    restaurant_id:1,
    description:"8 Hot and Crispy Wings.",
    price:790,
    image_url:"https://d1ralsognjng37.cloudfront.net/16457121-d225-4716-a363-512759ed696a.jpeg",
    status:"available"
  },
  {
    menu_name:"12 Zinger Wings",
    category_id:7,
    restaurant_id:1,
    description:"12 Hot and Crispy Wings.",
    price:990,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGI1MGYxMTRhNGU1MDdjYmJmZmNlZDJmYTdjYzE5ODIvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
    status:"available"
  },
  {
    menu_name:"Streetwise 5",
    category_id:8,
    restaurant_id:1,
    description:"5 Chicken Piece with Large Chips",
    price:1200.00,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNzJjMDQxNWRhYmY5NjcyMTlkYjcyZDdmMDA1ZTlmNTAvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
    status:"available"
  },
  {
    menu_name:"Sticky Fiver",
    category_id:8,
    restaurant_id:1,
    description:"5 Chicken Pieces Dipped in Sticky Sauce with Family Chips",
    price:1600.00,
    image_url:"https://d1ralsognjng37.cloudfront.net/16457121-d225-4716-a363-512759ed696a.jpeg",
    status:"available"
  },
   {
    menu_name:"Streetwise 7r",
    category_id:8,
    restaurant_id:1,
    description:"7 Chicken Pieces with Family Chips and a 1.25lt Soda",
    price:2600.00,
    image_url:"https://d1ralsognjng37.cloudfront.net/16457121-d225-4716-a363-512759ed696a.jpeg",
    status:"available"
  },
  {
    menu_name:"Wazito Bucket",
    category_id:8,
    restaurant_id:1,
    description:"11 Chicken Pieces with Family Chips",
    price:2600.00,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTVlYzZjNGM1MjBjYjU2MGE4MDg3NTkwMWIwZWI2ZGMvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
    status:"available"
  },
  {
    menu_name:"350 ml Soda",
    category_id:3,
    restaurant_id:1,
    description:"Flavor of choice",
    price:100,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTYyNjg4NWRkNjAyZDA0ZTM1N2E3YjE2Yjg5ODNkZGEvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
    status:"available"
  },
  {
    menu_name:"500 ml Soda",
    category_id:3,
    restaurant_id:1,
    description:"Flavor of choice",
    price:130,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTYyNjg4NWRkNjAyZDA0ZTM1N2E3YjE2Yjg5ODNkZGEvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
    status:"available"
  },
  {
    menu_name:"1.25l Soda",
    category_id:3,
    restaurant_id:1,
    description:"Flavor of choice",
    price:330,
    image_url:"https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMTYyNjg4NWRkNjAyZDA0ZTM1N2E3YjE2Yjg5ODNkZGEvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw==",
    status:"available"
  },
  {
    menu_name:"KFC Creamy Krusher",
    category_id:3,
    restaurant_id:1,
    description:"Flavor of choice",
    price:330,
    image_url:"",
    status:"available"
  },
  {
    menu_name:"KFC Ice Lolly",
    category_id:3,
    restaurant_id:1,
    description:"Flavor of choice",
    price:100,
    image_url:"",
    status:"available"
  },
  {
    menu_name:"1 Pc Chicken
    ",
    category_id:5,
    restaurant_id:1,
    description:"1 Pc Chicken Served either in Original Recipe Or Hot and Crispy",
    price:200,
    image_url:"",
    status:"available"
  },
  {
    menu_name:"9 Pc Chicken
    ",
    category_id:5,
    restaurant_id:1,
    description:"9 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
    price:200,
    image_url:"",
    status:"available"
  },
  {
    menu_name:"12 Pc Chicken
    ",
    category_id:5,
    restaurant_id:1,
    description:"12 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
    price:200,
    image_url:"",
    status:"available"
  },
  {
    menu_name:"15 Pc Chicken
    ",
    category_id:5,
    restaurant_id:1,
    description:"15 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
    price:200,
    image_url:"",
    status:"available"
  },
  {
    menu_name:"21 Pc Chicken
    ",
    category_id:5,
    restaurant_id:1,
    description:"21 Chicken Pieces served either in Original Recipe Or Hot and Crispy",
    price:200,
    image_url:"",
    status:"available"
  }

])

Order.create(
  customer_id:1,
  restaurant_id:1,
  total_amount:900
)

Review.create(
  restaurant_id:"1",
  customer_id:"1",
  rating:5,
  comment:"i came i ate im shocked and still eating.Fantastic",
  likes:0,
  commented_on:"3 daysa ago",
   reviewer:"queenslayjema"

)
