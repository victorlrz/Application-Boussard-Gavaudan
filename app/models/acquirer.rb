class Acquirer < ApplicationRecord
  include AlgoliaSearch
  has_many :deals
  has_many :rounds, :through => :deals
  has_one_attached :acquirer_logo
  validates :name, presence: true
  validates :sector, presence: true
  validates :url, presence: true

  algoliasearch do
  end

  private

  def load_algolia
    index = Algolia::Index.new('acquirers')
    index.add_object(self)
    puts "Reindex done"
  end
end
