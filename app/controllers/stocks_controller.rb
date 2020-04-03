class StocksController < ApplicationController
  def index
    @stocks = Stock.all
  end

  def show
    @stock = Stock.find(params[:id])
    @comments = Comment.all
  end

  def create
    @stock = Stock.new(stock_params)
    if @stock.save
      redirect_to stocks_path
    else
      render :new
    end
  end

  def edit
    @stock = Stock.find(params[:id])
  end

  def new
    @stock = Stock.new
  end

  def update
    @stock = Stock.find(params[:id])
    if @stock.update(stock_params)
      redirect_to stocks_path
    else
      render :edit
    end
  end

  def destroy
  end

  private

  def stock_params
    params.require(:stock).permit(:name, :sector, :currency, :identifier)
  end
end
