class CreateMenus < ActiveRecord::Migration[7.0]
  def change
    create_table :menus do |t|
      t.string :menu_name
      t.integer :category_id
      t.integer :restaurant_id
      t.text :description
      t.string :price
      t.string :image_url
      t.string  :status  #available or not available


      t.timestamps
    end
  end
end
