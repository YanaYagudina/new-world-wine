class Wine < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_many :orders
    has_many :users, through: :orders

    # validates :name, present: true
end
