class Stock < ApplicationRecord
  has_many :comments
  has_many :articles
  has_many :fundamentals
  has_and_belongs_to_many :portfolios
  validates :name, presence: true, uniqueness: true
  validates :identifier, presence: true, uniqueness: true
  before_save :uppercase_name
  acts_as_taggable_on :tags

  private

  def uppercase_name
    name.upcase!
    identifier.upcase!
  end
end
