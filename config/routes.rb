Rails.application.routes.draw do
  get 'documents/index'
  get 'documents/show'
  get 'documents/create'
  get 'documents/update'
  get 'documents/edit'
  get 'documents/destroy'
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
end
