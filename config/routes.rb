Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


Rails.application.routes.draw do
  get '/section1', to: 'pages#section1'
  get '/section2', to: 'pages#section2'
end

end
