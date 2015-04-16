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
    get :mygrove, on: :collection
    get :mygroveview, on: :collection
    get :irrigation, on: :collection
    get :calendar, on: :collection
    resources :terminals, only: [:index, :show, :update, :destroy]
    resources :todos, only: [:index, :show]
  end

  #Api functions
  scope '/api' do
    scope '/sensors' do
      post '/' => 'sensors#create'
    end
    scope '/statistics' do
      get  '/' => 'sensors#statistics'
    end
    scope '/config/data' do
      get '/' => 'terminals#get_terminal_file'
    end
  end
end
