class Acquirer < ApplicationRecord
  has_many :deals
  has_many :rounds, :through => :deals
  has_one_attached :acquirer_logo
  validates :name, presence: true
  validates :sector, presence: true
  validates :url, presence: true
end
