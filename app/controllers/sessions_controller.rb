class SessionsController < ApplicationController
    def create
        user = User.find_by(name:params[:name])

        session[:user_id] = user.id

        if user&.authenticate(params[:password])
            render json: user, status: :ok
        else
            render json: {erros: "invalid Password or User"}
    end

    def delete
        session.delete :user_id
        head :no_contend
end
