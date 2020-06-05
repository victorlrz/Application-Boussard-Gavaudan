class RemoveIsScrapedNewsFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :is_scraped_news, :string
  end
end
