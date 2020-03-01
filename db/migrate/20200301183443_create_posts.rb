class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.datetime :date
      t.text :content
      t.string :category
      t.references :deal, foreign_key: true

      t.timestamps
    end
  end
end
