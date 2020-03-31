class ChangeEbitdaToString < ActiveRecord::Migration[5.2]
  def change
    change_column :targets, :ebitda, :string
  end
end
