class RemoveCommentLinkFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :comment_link, :string
  end
end
