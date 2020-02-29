class Deal < ApplicationRecord
  include AlgoliaSearch
  has_one_attached :pdf
  has_one_attached :press_release
  belongs_to :acquirer
  belongs_to :target
  validates :date, presence: true
  validates :payment_method, presence: true
  validates :valuation_multiple, presence: true
  validates :bump, default: false
  validates :deal_value, presence: true
  validates :deal_currency, presence: true
  validates :private, default: false
  has_many :rounds, dependent: :destroy
  after_save :load_algolia

  algoliasearch do
  end

  private

  def load_algolia
    index = Algolia::Index.new('Deal')
    index.add_object(self)
    puts "Reindex done"
  end
end
