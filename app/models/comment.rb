class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :wine

  # validates_presence_of :comment, :rating
end
