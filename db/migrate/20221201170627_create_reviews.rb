class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id
      t.integer :customer_id
      t.string :title
      t.text :comment
      t.date :commented_on
      t.boolean :is_complaint
      t.boolean :is_praise

      t.timestamps
    end
  end
end
