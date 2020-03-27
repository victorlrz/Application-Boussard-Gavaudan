class AddFiedsToDocuments < ActiveRecord::Migration[5.2]
  def change
    add_column :documents, :name, :string
    add_column :documents, :category, :string
  end
end
