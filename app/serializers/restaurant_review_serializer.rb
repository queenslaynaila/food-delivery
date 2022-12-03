class RestaurantReviewSerializer < ActiveModel::Serializer
  attributes :customer_id,:comment,:commented_on
end
