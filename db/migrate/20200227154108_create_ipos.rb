class CreateIpos < ActiveRecord::Migration[5.2]
  def change
    create_table :ipos do |t|
      t.string :name
      t.string :sector
      t.string :lead_underwriter
      t.boolean :direct_listing
      t.integer :valuation

      t.timestamps
    end
  end
end
