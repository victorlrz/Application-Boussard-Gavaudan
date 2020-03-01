class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save!
      redirect_to deals_path
    else
      ender :new
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_path(@post)
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:date, :category, :content, :deal_id)
end
