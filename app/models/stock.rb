class Stock < ApplicationRecord
  has_many :comments
  validates :name, presence: true, uniqueness: true
  before_save :uppercase_name

  private
  def uppercase_name
    name.upcase!
  end
end
