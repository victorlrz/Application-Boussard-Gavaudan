class Stock < ApplicationRecord
  has_many :comments
  validates :name, presence: true, uniqueness: true
end
