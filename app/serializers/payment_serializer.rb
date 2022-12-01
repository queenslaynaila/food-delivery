class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :amount, :paid_by, :payment_date
end
