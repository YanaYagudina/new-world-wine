class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :price, :product_information, :brand, :country, :region, :appelation, :wine_type, :varietal, :style, :abv, :taste, :body, :image
end
