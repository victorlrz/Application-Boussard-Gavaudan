class Target < ApplicationRecord
  has_one_attached :annual_report
  has_one_attached :target_logo
  has_many :deals
end
