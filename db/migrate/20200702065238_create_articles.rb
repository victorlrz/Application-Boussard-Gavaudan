class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.datetime :date
      t.string :title
      t.string :url
      t.references :stock, foreign_key: true

      t.timestamps
    end
  end
end
