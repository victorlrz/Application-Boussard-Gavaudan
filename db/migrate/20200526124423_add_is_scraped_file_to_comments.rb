class AddIsScrapedFileToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :is_scraped_file, :boolean
  end
end
