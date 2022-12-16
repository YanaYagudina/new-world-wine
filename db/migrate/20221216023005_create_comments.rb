class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :rating
      t.string :user_id
      t.string :wine_id

      t.timestamps
    end
  end
end
