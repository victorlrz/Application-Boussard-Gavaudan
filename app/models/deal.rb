class Deal < ApplicationRecord
  belongs_to :acquirer
  belongs_to :target
end
