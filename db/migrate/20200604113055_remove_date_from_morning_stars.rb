class RemoveDateFromMorningStars < ActiveRecord::Migration[5.2]
  def change
    remove_column :morning_stars, :date, :string
  end
end
