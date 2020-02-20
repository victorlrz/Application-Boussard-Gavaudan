class Acquirer < ApplicationRecord
  has_many :deals
  has_one_attached :acquirer_logo
end
