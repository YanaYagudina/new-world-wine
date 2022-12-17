class Wine < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_many :orders
    has_many :users, through: :orders
    # => migration doesn't work with this line:
    # validates_presence_of :name, :price, :brand, :product_information, :country, :wine_type, :abv
    validates :name, uniqueness: true, length: {maximum: 300}
    validates :price, numericality: {greater_then: 0}
    # validates :abv, numericality: {only_integer, greater_then: 5}
    validates :abv, numericality: {greater_then: 5}
    validates :brand, length: {maximum: 150}
    validates :country, length: {maximum: 50}
    validates :wine_type, length: {maximum: 30}
    validates :product_information, length: {in: 0..500}
    # => valedate?

end
