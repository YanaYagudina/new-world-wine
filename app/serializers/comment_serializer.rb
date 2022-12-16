class CommentSerializer < ActiveModel::Serializer
  attributes :id, :rating, :user_id, :wine_id
end
