class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]
    # => '/login'
    def create
        user = User.find_by(name:params[:name])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors: "invalid Password or Username"}
    end

    # => "/logout"
    def delete
        session.delete :user_id
        head :no_content
    end
end
