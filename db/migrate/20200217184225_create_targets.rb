class CreateTargets < ActiveRecord::Migration[5.2]
  def change
    create_table :targets do |t|
      t.string :name
      t.string :identifier
      t.string :sector
      t.string :url

      t.timestamps
    end
  end
end
