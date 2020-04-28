class Post < ApplicationRecord
  belongs_to :deal
  validates :date, presence: true
  validates :content, presence: true
end
