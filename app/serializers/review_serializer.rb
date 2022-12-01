class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :customer_id, :comment, :is_complaint, :is_praise
end
