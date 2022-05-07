class CommentsController < ApplicationController
protect_from_forgery

  def index
  end

  def show
    @comments = Comment.all
    render :json => @comments
  end

  def create
    Comment.create(name: params[:name], post_date_time: DateTime.now, comment: params[:comment])
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      head :no_content, status: :ok
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

end
