class Customer < ApplicationRecord
  has_secure_password
  has_many :orders
  validates :username,   uniqueness:true,presence:true
 


end
