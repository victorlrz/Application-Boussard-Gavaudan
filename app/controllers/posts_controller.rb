class PostsController < ApplicationController
  def index
    @posts = Post.all.order("date ASC")
  end

  def new
    @deal = Deal.find(params[:deal_id])
    @post = Post.new
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:deal_id])
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
      redirect_to deal_path(@post)
    else
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to deal_path
  end

  private

  def post_params
    params.require(:post).permit(:date, :category, :content, :deal_id)
  end
end
