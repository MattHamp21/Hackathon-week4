Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/characters', to: 'characters#index'
    get '/characters/:id', to: 'characters#show'
    post '/characters', to: 'characters#create'
    put '/characters/:id', to: 'characters#update'
    delete '/characters/:id', to: 'characters#destroy'

    get '/games', to: 'games#index'
    get '/games/:id', to: 'games#show'
    post '/games', to: 'games#create'
    put '/games/:id', to: 'games#update'
    delete '/games/:id', to: 'games#destroy'

    get '/weapons', to: 'weapons#index'
    get '/weapons/:id', to: 'weapons#show'
    post '/weapons', to: 'weapons#create'
    put '/weapons/:id', to: 'weapons#update'
    delete '/weapons/:id', to: 'weapons#destroy'
  end
end
