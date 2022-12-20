class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    wrap_parameters format: []

        def show 
            user = User.find(params[:id])
            render json: current_user, status: :ok
        end 
    
        def create
            user = User.create!(user_params)
            render json: user, status: :created
        end 

    private

    def user_params
        params.permit(:id, :first_name, :last_name, :email, :location, :age, :status, :avatar_img, :username, :password)
    end 
end
