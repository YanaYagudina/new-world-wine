class OrdersController < ApplicationController
    def index
        render json Order.all, status: :ok
    end

    def show
        order = Order.find(params[:id])
        render json: order, status: :ok    
    end

    def create
        @order = Order.create!(order_params)
        render json: @order, status: :created
    end

    def update
        @order.update!(order_params)
        render json: @order, status: :accepted
    end

    def destroy
        @order.destroy
        render json: {}
    end

    private

    def order_params
        params.permit (:customer_id, :wine_id)
    end 
end
