class Category < ApplicationRecord
  has_many :menus
  has_many :restaurants,through: :menus
end
