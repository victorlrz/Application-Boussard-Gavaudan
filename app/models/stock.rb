class Stock < ApplicationRecord
  has_many :comments
  has_many :scraped_files
  has_many :financial_time_articles
  has_many :morning_stars
  has_many :fundamentals
  has_and_belongs_to_many :portfolios
  validates :name, presence: true, uniqueness: true
  validates :identifier, presence: true, uniqueness: true
  before_save :uppercase_name

  private

  def uppercase_name
    name.upcase!
    identifier.upcase!
  end
end
