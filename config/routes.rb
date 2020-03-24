Rails.application.routes.draw do
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
