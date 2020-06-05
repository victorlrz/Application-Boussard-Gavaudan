class RemoveMgstarIdentifierFromStocks < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :mgstar_identifier, :string
  end
end
