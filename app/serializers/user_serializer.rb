class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :location, :age, :status, :avatar_img, :username, :password_digest
end
