class Comment < ApplicationRecord
  belongs_to :stock
  validates :title, presence: true
  has_one_attached :press_release
  has_one_attached :presentation
end
