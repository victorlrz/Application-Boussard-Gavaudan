class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.datetime :date
      t.string :source
      t.references :stock, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
