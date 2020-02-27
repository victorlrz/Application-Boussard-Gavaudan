Rails.application.routes.draw do
  root to: 'pages#home'
  resources :deals do
    resources :rounds
  end

  resources :acquirers do
  end
  resources :targets do
  end
  resources :ipos do
  end
end
