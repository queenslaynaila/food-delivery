class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :description
      t.string :address
      t.string :food_type
      t.string :image_url
      t.time :open_time
      t.time :closing_time

      t.timestamps
    end
  end
end

