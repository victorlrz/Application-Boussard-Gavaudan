class AddMgstarIdentifierToStock < ActiveRecord::Migration[5.2]
  def change
    add_column :stocks, :mgstar_identifier, :string
  end
end
