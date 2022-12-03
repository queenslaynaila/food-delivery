class MenuSerializer < ActiveModel::Serializer
  attributes  :menu_name, :price, :image_url, :category, :restaurant,:description, :status
  belongs_to :restaurant
end
