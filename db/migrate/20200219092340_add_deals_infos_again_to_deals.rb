class AddDealsInfosAgainToDeals < ActiveRecord::Migration[5.2]
  def change
    add_column :deals, :private, :boolean
    add_column :deals, :rumors, :boolean
  end
end
