class Wine < ApplicationRecord
    has_many :contents
    has_many :customers, through: :contents
    has_many :orders
    has_many :customers, through: :orders

    # validates :name, present: true
end
