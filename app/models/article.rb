class Article < ApplicationRecord
    validates :id, presence: true
    validates :date, presence: true
    validates :stock_id, presence: true
    validates :title, presence: true
end

