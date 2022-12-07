class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :restaurant_id,:menu_id,:order_date, :total_amount, :order_status,:delivery_fee

end
