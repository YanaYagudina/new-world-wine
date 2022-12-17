class UsersController < ApplicationController
    def index
        render json User.all, status: :ok
    end

    skip_before_action :authorized_user, only: [:create]

    def show
        user = User.find(session[:user_id])

        render json: user, status: :ok    
    end

    def create
        @user = User.create!(user_params)
        session[:user_id] = user.id
        render json: @user, status: :created
    end

    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        render json: {}
    end

    private

    def user_params
        params.permit (:first_name, :last_name, :email, :location, :age, :status, :avatar_img, :username, :password_digest)
    end 
end
