class WinesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
 
    def index
        render json Wine.all, status: :ok
    end

    def show
        wine = Wine.find(params[:id])
        render json: wine, status: :ok    
    end

    def create
        @wine = Wine.create!(wine_params)
        if wine.valid?
            render json: @wine, status: :created
        else
            render json: {errors: production.erors.full_messages}, status: :unprocessable_entity
        # => or without @?
    end

    def update
        @wine.update!(wine_params)
        render json: @wine, status: :accepted
    end

    def destroy
        @wine.destroy
        render json: {}
    end

    private

    def wine_params
        params.permit ( :name, :year, :price, :product_information, :brand, :country, :region, :appellation, :wine_type, :varietal, :style, :abv, :taste, :body)
    end 

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def render_not_found
        render lson: {errors: "Wine Not Found"}, ststus: :not_found
    end

    
end
