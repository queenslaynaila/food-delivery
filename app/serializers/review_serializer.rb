class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :customer_id,:rating,:likes, :comment, :commented_on,:reviewer
end
