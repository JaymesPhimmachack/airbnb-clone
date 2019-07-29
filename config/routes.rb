Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id' => 'static_pages#property'
  get '/login/:type' => 'static_pages#login'
  get '/listings/:user_id' => 'static_pages#listings'
  get '/trips/:user_id' => 'static_pages#trips'
  get '/booking/:id/success' => 'static_pages#success'
  
  namespace :api do
    # Add routes below this line
    resources :users, only: [:create]
    resources :sessions, only: [:create]
    resources :properties, only: [:index, :create, :show, :edit, :destroy]
    resources :bookings, only: [:create, :destroy]
    resources :charges, only: [:create]
    
    get '/properties/:id/bookings' => 'bookings#get_property_bookings'
    get '/authenticated' => 'sessions#authenticated'
    get '/users/:user_id/properties' => 'properties#index_by_user'
    get '/users/:user_id/bookings' => 'bookings#index_by_user'
    get '/booked_properties/:user_id/bookings' => 'bookings#get_booked_properties'
    delete '/sessions'             => 'sessions#destroy'
  end

end
