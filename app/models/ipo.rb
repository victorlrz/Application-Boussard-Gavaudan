class Ipo < ApplicationRecord
  has_one_attached :ipo_logo
  has_one_attached :pdf_prospectus
  validates :name, presence: true
  validates :sector, presence: true
end
