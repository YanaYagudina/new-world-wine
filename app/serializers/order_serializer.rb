class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :wine_id
end
