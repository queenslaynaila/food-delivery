class RestaurantMenuSerializer < ActiveModel::Serializer
  attributes :menu_name,:category_id,:description,:price,:image_url,:status
end
