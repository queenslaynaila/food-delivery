class CustomerSerializer < ActiveModel::Serializer
  attributes :id ,:username, :email, :password_digest, :phonenumber
   has_many :orders
end
