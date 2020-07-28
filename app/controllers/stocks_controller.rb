class StocksController < ApplicationController
  def index
    if params[:query].present?
      sql_query = "(name ILIKE :query OR sector ILIKE :query) AND price <> 0"
      @stocks = Stock.where(sql_query, query: "%#{params[:query]}%")
    else
      @stocks = Stock.where("price <> 0.0")
    end

    @datasetstocks = @stocks.map do |stock|
      { name: stock.name,
        price: stock.price,
        daily_chg: stock.price_1chg.round(2),
        yearly_chg: stock.price_yrchg,
        pe: stock.ebitda.split("P/E (TTM)").last.split("Market cap").first.to_f,
        beta: stock.beta_ft.round(2) }
    end

    @stockslist = Stock.where("price <> 0.0").pluck(:name).sort
  end

  def show
    @stock = Stock.find(params[:id])
    @comments = Comment.all
    @stocks = Stock.where("price <> 0.0")
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
    params.require(:stock).permit(:name, :sector, :currency, :identifier, tag_list: [], :founded)
  end
end
