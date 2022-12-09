class RestaurantReviewSerializer < ActiveModel::Serializer
  attributes :id,:reviewer,:comment,:commented_on,:likes,:rating
end
