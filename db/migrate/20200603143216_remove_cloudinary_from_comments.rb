class RemoveCloudinaryFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :cloudinary, :string
  end
end
