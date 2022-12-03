class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :firstname
      t.string :lastname
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :phonenumber
      t.text :address
      t.string :status

      t.timestamps
    end
  end
end
