class Target < ApplicationRecord
  has_one_attached :annual_report
  has_many :deals
end
