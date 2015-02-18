Rails.application.routes.draw do
  root 'home#index'

  delete "log_out" => "sessions#destroy", :as => "log_out"
  post "log_in" => "sessions#create", :as => "log_in"
  get "login" => "home#login", :as => "login"
  get "sign_up" => "users#new", :as => "sign_up"
  get "legal" => "home#legal", :as => 'legal'

  resources :terminals, only: [:new, :create, :edit, :update, :destroy]
  resources :days,  only: [:new, :create, :edit, :update, :destroy]
  resources :todos, only: [:new, :create, :edit, :update, :destroy]
  resources :users, only: [:new, :create]
  resources :sessions
  resource :user do
    get :confirm, on: :collection
    get :statistics, on: :collection
    resources :terminals, only: [:index, :show]
    resources :todos, only: [:index, :show]
  end

  #Api functions
  scope '/api' do
    scope '/sensors' do
      post '/' => 'sensors#create'
      get  '/' => 'sensors#error'
    end
  end
end
