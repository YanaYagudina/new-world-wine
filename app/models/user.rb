class User < ApplicationRecord
    has_many :comment
    has_many :wines, through: :comment
    has_many :orders
    has_many :wines, through: :orders

    has_secure_password
end
