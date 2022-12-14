class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address,:food_type,:image_url,:open_time,:closing_time,:likes
  has_many :menus , serializer: RestaurantMenuSerializer
  has_many :reviews, serializer: RestaurantReviewSerializer
  has_many :categories ,through: :menus
end
