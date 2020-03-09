class PostsController < ApplicationController
  def index
    @deal = Deal.find(params[:deal_id])
    @posts = Post.all
  end

  def show
    @deal = Deal.find(params[:deal_id])
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
    @deal = Deal.find(params[:deal_id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @deal = Deal.find(params[:deal_id])
    @post = Post.new(post_params)
    @post.deal = @deal
    if @post.save!
      redirect_to deal_path(@deal)
    else
      render :new
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_path(@post)
    else
      render :edit
    end
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:date, :category, :content, :deal_id)
  end
end
