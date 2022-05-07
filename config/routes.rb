Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :comments
  post "comments/create"
  delete "comments/:id" => "articles#destroy"
end
