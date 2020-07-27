class Comment < ApplicationRecord
  belongs_to :stock
  validates :title, presence: true
end
