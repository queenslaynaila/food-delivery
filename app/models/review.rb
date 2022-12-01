class Review < ApplicationRecord

  belongs_to :restaurant
  belongs_to :customer
  belongs_to :order
end
