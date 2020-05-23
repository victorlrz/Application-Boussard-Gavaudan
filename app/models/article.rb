class Article < ApplicationRecord
    validates :date, presence: true
    validates :stock_id, presence: true
    validates :title, presence: true
end

