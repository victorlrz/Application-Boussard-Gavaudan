class AddInfostoDeal < ActiveRecord::Migration[5.2]
  def change
    add_column :deals, :valuation_type, :string
    add_column :deals, :bump, :boolean
    add_column :deals, :comments, :text
  end
end
