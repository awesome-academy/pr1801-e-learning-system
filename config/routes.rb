Rails.application.routes.draw do
  root "categories#index"

  get "/words", to: "static_pages#home"
  get "static_pages/about"
  get "static_pages/help"

  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :activities
  resources :password_resets, only: [:new, :create, :edit, :update]
  resources :relationships, only: [:create, :destroy]
  resources :user_lessons, only: [:index, :new, :create]
  resources :user_words, only: [:index, :create, :edit, :update]
  resources :categories, only: [:index, :show] do
    resources :lessons, only: [:index, :show, :edit] do
      resources :words, only: [:index, :show]
    end
  end
  resources :users do
    member do
      get :following, :followers
    end
  end

  namespace :admin do
    resources :users
    resources :categories do
      resources :lessons do
        resources :words
      end
    end
  end
end
