class MenuSerializer < ActiveModel::Serializer
  attributes :id, :menu_name, :price, :image_url, :category, :description, :status
end
