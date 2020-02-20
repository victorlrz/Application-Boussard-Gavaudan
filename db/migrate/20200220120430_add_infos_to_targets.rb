class AddInfosToTargets < ActiveRecord::Migration[5.2]
  def change
    add_column :targets, :description, :text
    add_column :targets, :ceo, :string
  end
end
