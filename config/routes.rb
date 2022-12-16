Rails.application.routes.draw do
  resources :comments, only: [:create]
  resources :orders
  resources :wines
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
post "/login", to: "sessions#create"
delete '/logout', to: 'sessions#delete'
  # get '/hello', to: 'application#hello_world'
end
