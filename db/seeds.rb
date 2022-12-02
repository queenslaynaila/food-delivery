puts " Seeding  categories..."
Category.create([
  {
    category_name: "Pizza",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png"
  },
  {
    name: "Fastfood",
    image_url: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png"
  },
  {
    name: "Drinks",
    image_url: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
  },
  {
    name: "Coffee & Tea",
    address: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png"
  },
  {
    name: "Chicken",
    address: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png"
  },
  {
    name: "Burgers",
    address: "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Burger_BrowseHome@3x.png"
  }
])

Customer.create([
  {
  firstname:"Queenslay",
  lastname:"Jema",
  username:"queenslayjema",
  email:"queenslayjema@gmail.com",
  password:"queenslaynaila",
  phonenumber:0713518356,
  address:"Riara road",
  status:"active"
}
])

Restaurant.create([
  {
    name:'KFC'
    description:'Our food is fingerlicking good',
    address:'Junction',
    food_type:'Fastfood',
    image_url:'https://d2lev5xroqke9e.cloudfront.net/ke/view/a24046407e?width=2000&height=643',
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
    name:'Js Burgers And Ribs'
    address:'Ngong road'
    image_url:
    open_time:'8.00am',
    closing_time:'10:00pm'
  },
  {
    name:'Galitos'
    description:
    address:
    food_type:
    image_url:
    open_time:
    closing_time:
  },


])

Menu.create([
  {
    menu_name:
    category_id:
    restaurant_id:
    description:
    price:
    image_url:
    status:"available"
  },
  {
    menu_name:
    category_id:
    restaurant_id:
    description:
    price:
    image_url:
    status:"available"
  },
  {
    menu_name:
    category_id:
    restaurant_id:
    description:
    price:
    image_url:
    status:"available"
  },
  {
    menu_name:
    category_id:
    restaurant_id:
    description:
    price:
    image_url:
    status:"available"
  },
  {
    menu_name:
    category_id:
    restaurant_id:
    description:
    price:
    image_url:
    status:"available"
  },
  {
    menu_name:
    category_id:
    restaurant_id:
    description:
    price:
    image_url:
    status:"available"
  },
])
