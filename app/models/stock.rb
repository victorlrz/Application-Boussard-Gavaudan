class Stock < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
