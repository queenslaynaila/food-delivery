Rails.application.routes.draw do
  resources :customers
  resources :reviews
  resources :categories
  resources :restaurants
  resources :payments
  resources :menus
  resources :orders

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: "sessions#create"
  post 'signup', to: "customers#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "customers#show"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
