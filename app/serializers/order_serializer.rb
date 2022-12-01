class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :order_, :date, :totals, :order_status
end
