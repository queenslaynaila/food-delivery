class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.string :order_id
      t.integer :amount
      t.string :paid_by
      t.string :payment_date

      t.timestamps
    end
  end
end
