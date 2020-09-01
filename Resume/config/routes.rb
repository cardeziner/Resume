Rails.application.routes.draw do
  root 'static_pages#index'

  get "/education", to: 'static_pages#index'
  get "/jobs", to: 'static_pages#index'
  get "/projects", to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :jobs, only: [:index] do
      end
    end
  end

end
