class CreateRounds < ActiveRecord::Migration[5.2]
  def change
    create_table :rounds do |t|
      t.datetime :date
      t.float :bump
      t.float :acceptance_threshold
      t.boolean :success
      t.references :deal, foreign_key: true
      t.references :acquirer, foreign_key: true

      t.timestamps
    end
  end
end
