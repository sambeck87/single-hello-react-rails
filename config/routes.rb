Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1, defaults: {format: 'json'} do
      resources :greetings, only: [:index]
    end
  end

end
