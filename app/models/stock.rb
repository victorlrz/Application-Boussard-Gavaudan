class Stock < ApplicationRecord
  has_many :comments
  validates :name, presence: true, uniqueness: true
  validates :identifier, presence: true, uniqueness: true
  before_save :uppercase_name

  private
  def uppercase_name
    name.upcase!
    currency.upcase!
    identifier.upcase!
  end
end
