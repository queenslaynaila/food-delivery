class Restaurant < ApplicationRecord
  has_many :menus
  has_many :orders
  has_many :reviews
  has_many :categories ,through: :menus
end
