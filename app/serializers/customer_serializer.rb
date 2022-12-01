class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :email, :password_digest, :phonenumber, :account_status
end
