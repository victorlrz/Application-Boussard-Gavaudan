class AddBetaFtToTargets < ActiveRecord::Migration[5.2]
  def change
    add_column :targets, :beta_ft, :float
  end
end
