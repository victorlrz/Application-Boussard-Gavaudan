class ChangeRevFromIntToString < ActiveRecord::Migration[5.2]
  def change
    change_column :targets, :revenues, :string
  end
end
