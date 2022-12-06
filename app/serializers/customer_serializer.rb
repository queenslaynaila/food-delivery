class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :email, :password_digest, :phonenumber, :status
 
end
