Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api do
    namespace :v1 do
      resources :products, except: :show
      get "/products/search" => "products#show", as: "products_show"
    end
  end

  # Defines the root path route ("/")
  root "home#index"
end
