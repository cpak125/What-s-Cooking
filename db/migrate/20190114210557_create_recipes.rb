class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :ingredients
      t.integer :cal_per_serving
      t.integer :servings
      t.string :instructions
      t.string :img
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
