class CategorySerializer < ActiveModel::Serializer
  attributes  :category_name
  has_many :menus
end
