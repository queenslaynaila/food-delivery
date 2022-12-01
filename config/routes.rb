Rails.application.routes.draw do
  resources :reviews
  resources :categories
  resources :restaurants
  resources :payments
  resources :menus
  resources :orders
  resources :customers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/login', to: "sessions#create"
  get '/me', to: "customers#show"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
