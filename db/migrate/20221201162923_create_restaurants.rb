class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :description
      t.string :address
      t.string :food_type
      t.string :image_url
      t.string :open_time
      t.string :closing_time
      t.integer :likes, default:0

      t.timestamps
    end
  end
end

