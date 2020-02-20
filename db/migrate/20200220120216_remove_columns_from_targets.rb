class RemoveColumnsFromTargets < ActiveRecord::Migration[5.2]
  def change
    remove_column :targets, :url, :string
    remove_column :targets, :identifier, :string
  end
end
