class CreateScrapedFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :scraped_files do |t|
      t.datetime :date
      t.bigint :stock_id
      t.string :title
      t.string :cloudinary
      t.string :comment_link

      t.timestamps
    end
    add_index :scraped_files, :stock_id
  end
end
