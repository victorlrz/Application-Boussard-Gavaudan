class AddCloudinaryToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :cloudinary, :string
  end
end
