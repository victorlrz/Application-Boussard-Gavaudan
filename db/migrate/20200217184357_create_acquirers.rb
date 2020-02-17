class CreateAcquirers < ActiveRecord::Migration[5.2]
  def change
    create_table :acquirers do |t|
      t.string :name
      t.string :identifier
      t.string :sector
      t.string :url

      t.timestamps
    end
  end
end
