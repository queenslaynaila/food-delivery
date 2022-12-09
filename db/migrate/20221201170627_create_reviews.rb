class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id
      t.integer :customer_id
      t.integer :rating
      t.integer :likes
      t.text :comment
      t.string :commented_on
      t.string :reviewer


      t.timestamps
    end
  end
end
