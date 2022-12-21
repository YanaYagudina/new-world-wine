class WinesController < ApplicationController
    skip_before_action :authorized_user
    # , only: [:index, :show]

   # before_action :admin_only, only: [:create, :update, :destroy]
    
    def index
        render json: Wine.all, status: :ok
    end

    def show
        wine = Wine.find(params[:id])
        render json: wine, status: :ok    
    end

    def create
        wine = Wine.create!(wine_params)
        render json: wine, status: :created
    end

    def update
        wine.update!(wine_params)
        render json: wine, status: :accepted
    end

    def destroy
        wine.destroy
        render json: {}
    end

    private

    def wine_params
        params.permit( :name, :year, :price, :product_information, :brand, :country, :region, :appellation, :wine_type, :varietal, :style, :abv, :taste, :body)
    end 

    # def admin_only
    # end
end
