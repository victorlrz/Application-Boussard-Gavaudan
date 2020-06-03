class RemoveIsScrapedFileFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :is_scraped_file, :string
  end
end
