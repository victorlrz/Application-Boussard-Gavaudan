class AddIsScrapedNewsToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :is_scraped_news, :boolean
  end
end
