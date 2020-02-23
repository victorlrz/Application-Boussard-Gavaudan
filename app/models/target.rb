class Target < ApplicationRecord
  has_one_attached :annual_report
  has_one_attached :target_logo
  has_many :deals
  has_many :rounds, :through => :deals
  validates :name, presence: true, uniqueness: true
  validates :sector, presence: true
end
