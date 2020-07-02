class Article < ApplicationRecord
  belongs_to :stock
  validates :date, presence: true
  validates :stock_id, presence: true
  validates :title, presence: true
end
