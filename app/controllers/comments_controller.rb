class CommentsController < ApplicationController
  def index
    @comments = Comment.all.order("date ASC")
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @stock = Stock.find(params[:stock_id])
    @comment = Comment.new(comment_params)
    @comment.stock = @stock
    if @comment.save!
      redirect_to stocks_path
    else
      render :new
    end
  end

  def edit
    @stock = Stock.find(params[:stock_id])
    @comment = Comment.find(params[:id])
  end

  def new
    @stock = Stock.find(params[:stock_id])
    @comment = Comment.new
  end

  def update
    @stock = Stock.find(params[:stock_id])
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      redirect_to stocks_path
    else
      render :edit
    end
  end

  def destroy
    @stock = Stock.find(params[:stock_id])
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to stocks_path
  end

  private

  def comment_params
    params.require(:comment).permit(:date, :category, :content, :source, :stock_id, :title)
  end
end
