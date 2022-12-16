class User < ApplicationRecord
    has_many :comment
    has_many :wines, through: :comment
    has_many :orders
    has_many :wines, through: :orders

    validates :first_name, length: {maximum: 20}
    validates :last_name, length: {maximum: 20}
    # => find include @ for email
    validates :email, length: {maximum: 30} 
    validates :age, numericality: {only_integer, greater_then: 21}
    validates :username, uniqueness: true, length: {maximum: 15}

    has_secure_password
end
