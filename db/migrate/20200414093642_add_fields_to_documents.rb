class AddFieldsToDocuments < ActiveRecord::Migration[5.2]
  def change
    add_column :documents, :title, :string
    add_column :documents, :date, :datetime
    add_column :documents, :owner, :string
  end
end
