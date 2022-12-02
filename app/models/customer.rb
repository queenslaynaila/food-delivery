class Customer < ApplicationRecord
  has_secure_password
  has_many :orders
  validates :username, :email, uniqueness:true,presence:true
  validates  :password,length:{in:6..20}


end
