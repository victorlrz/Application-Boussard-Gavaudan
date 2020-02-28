class AddFieldsToTargets < ActiveRecord::Migration[5.2]
  def change
    add_column :targets, :identifier, :string
    add_column :targets, :url, :text
    add_column :targets, :ebitda, :integer
    add_column :targets, :revenues, :integer
  end
end
