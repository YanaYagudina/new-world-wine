class SessionsController < ApplicationController
    skip_before_action :authorized_user

    def create
        user = User.find_by(username:params[:name])
        puts user
        # puts params[:password] &.authenticate(params[:password])

        # user && user.authenticate....)
        if user
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors: "Invalid Password or Username"}
        end 
    end 

    def destroy
        session.delete(:user_id)
        head :no_content 
    end 
end
