Rails.application.routes.draw do
 get 'sessions/new'
 get "log_out" => "sessions#destroy", :as => "log_out"
 get "log_in" => "sessions#new", :as => "log_in"
 get "sign_up" => "users#new", :as => "sign_up"

 root 'home#index'
 resources :users, only: [:index, :new, :create, :delete]
 resources :user, only: [:show]
 resources :sessions, only: [:new, :create, :destroy]
end
