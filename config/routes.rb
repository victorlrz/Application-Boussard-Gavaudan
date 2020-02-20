Rails.application.routes.draw do
  resources :deals do
    resources :rounds do
    end
  end
  resources :acquirers do
  end
  resources :targets do
  end
end
