class AddFieldsToIpo < ActiveRecord::Migration[5.2]
  def change
    add_column :ipos, :date, :datetime
  end
end
