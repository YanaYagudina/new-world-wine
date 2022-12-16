class SessionsController < ApplicationController
    def create
        user = User.find_by(name:params[:name])
        
        if user&.authenticate(params[:password])
            render json: user, status: :ok
        else
            render json: {erros: "invalid Password or User"}
    end
end
