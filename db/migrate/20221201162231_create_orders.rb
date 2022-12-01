class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.integer :restaurant_id
      t.date :order_date
      t.float :total_amount
      t.string :order_status #pending,delivered,cancelled
      t.text :instructions
      t.text :delivery_address
      t.timestamps
    end
  end
end
