Rails.application.routes.draw do
  root 'home#index'

  delete "log_out" => "sessions#destroy", :as => "log_out"
  post "log_in" => "sessions#create", :as => "log_in"
  get "login" => "home#login", :as => "login"
  get "sign_up" => "users#new", :as => "sign_up"
  get "legal" => "home#legal", :as => 'legal'

  resources :sensors, only: [:new, :create, :edit, :update, :destroy]
  resources :users, only: [:new, :create]
  resources :sessions
  resource :user do
    get :confirm, on: :collection
    resources :terminals, only: [:index, :new, :create, :edit, :update, :destroy, :show]
  end
end
