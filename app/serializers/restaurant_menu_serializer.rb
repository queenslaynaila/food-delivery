class RestaurantMenuSerializer < ActiveModel::Serializer
  attributes :id, :menu_name,:category_id,:description,:price,:image_url,:status
end
