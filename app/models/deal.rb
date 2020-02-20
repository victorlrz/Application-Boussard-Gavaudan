class Deal < ApplicationRecord
  has_one_attached :pdf
  has_one_attached :press_release
  belongs_to :acquirer
  belongs_to :target
  has_many :rounds
end
