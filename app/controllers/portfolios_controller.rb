class PortfoliosController < ApplicationController
  def index
    @portfolios = Portfolio.all
    @bgltv = Portfolio.where(fund: "BGLTV", date: '07/04/2020')
    @bgeqt = Portfolio.where(fund: "BGEQT", date: '07/04/2020')
    @stocks = Stock.all
  end

  def show
    @portfolio = Portfolio.find(params[:id])
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end
