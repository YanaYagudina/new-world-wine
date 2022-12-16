class CommentsController < ApplicationController
    
    def index
        render json Comment.all, status: :ok
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, status: :ok    
    end

    def create
        @comment = Comment.create!(wine_params)
        render json: @comment, status: :created
    end

    def update
        @ccomment.update!(comment_params)
        render json: @comment, status: :accepted
    end

    def destroy
        @comment.destroy
        render json: {}
    end

    private

    def comment_params
        params.permit (:comment, :raiting, :customer_id, :wine_id)
    end 
end
