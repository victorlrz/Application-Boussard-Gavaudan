class Stock < ApplicationRecord
  has_many :comments
  has_many :articles
  has_many :fundamentals
  validates :name, presence: true, uniqueness: true
  validates :identifier, presence: true, uniqueness: true
  before_save :uppercase_name
  acts_as_taggable_on :tags
  has_many_attached :earnings_pr
  has_many_attached :earnings_presentation

  private

  def uppercase_name
    name.upcase!
    identifier.upcase!
  end
end
