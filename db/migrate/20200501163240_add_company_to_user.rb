class AddCompanyToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company, :string
  end
end
