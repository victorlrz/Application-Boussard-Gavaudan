Rails.application.routes.draw do
  root to: 'pages#home'
  resources :deals do
    resources :rounds
  end

  resources :acquirers do
    resources :posts
  end
  resources :targets do
  end

  resources :ipos do
  end

  resources :deals do
  end

  resources :deals do
    resources :posts
  end
end
