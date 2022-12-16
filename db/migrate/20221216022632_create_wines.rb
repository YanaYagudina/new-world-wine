class CreateWines < ActiveRecord::Migration[7.0]
  def change
    create_table :wines do |t|
      t.string :name
      t.integer :year
      t.integer :price
      t.string :product_information
      t.string :brand
      t.string :country
      t.string :region
      t.string :appelation
      t.string :wine_type
      t.string :varietal
      t.string :style
      t.integer :abv
      t.string :taste
      t.string :body

      t.timestamps
    end
  end
end
