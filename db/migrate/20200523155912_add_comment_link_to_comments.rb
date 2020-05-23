class AddCommentLinkToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :comment_link, :string
  end
end
