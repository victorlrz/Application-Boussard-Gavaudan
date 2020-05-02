class AddFielsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :phone_number, :string
    add_column :users, :location, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :tax_residency, :string
    add_column :users, :tax_number, :string
    add_column :users, :source_of_wealth, :string
  end
end
