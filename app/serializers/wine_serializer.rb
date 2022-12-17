class WineSerializer < ActiveModel::Serializer
  attributes :id, :year, :price, :product_information, :brand, :country, :region, :appelation, :wine_type, :varietal, :style, :abv, :taste, :body, :image
end
