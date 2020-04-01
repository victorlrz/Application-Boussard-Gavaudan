class StocksController < ApplicationController
  def index
    @stocks = Stock.all
  end

  def show
    @stock = Stock.find(params[:id])
    @comments = Comment.all
  end

  def create
  end

  def edit
  end

  def new
  end

  def update
  end

  def destroy
  end
end
