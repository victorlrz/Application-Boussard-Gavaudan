Rails.application.routes.draw do
    require "sidekiq/web"
    authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end

  devise_for :users
  root to: 'pages#home'

  resources :acquirers do
  end

  resources :targets do
  end

  resources :ipos do
  end

  resources :deals do
    resources :posts
  end

  resources :stocks do
    resources :comments do
    end
  end

  resources :portfolios do
  end

  resources :documents do
  end

end
