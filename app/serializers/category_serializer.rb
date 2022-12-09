class CategorySerializer < ActiveModel::Serializer
  attributes  :id, :category_name,:image_url
  has_many :menus
  has_many :restaurants,through: :menus
end
