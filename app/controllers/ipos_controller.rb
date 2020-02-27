class IposController < ApplicationController
  def index
    @ipos = Ipo.all
  end

  def new
    @ipo = Ipo.new
  end

  def create
    @ipo = Ipo.new(ipo_params)
    if @ipo.save!
      redirect_to deals_path
    else
      render :new
    end
  end

  def show
    @ipo = Ipo.find(params[:id])
  end

  def edit
    @ipo = Ipo.find(params[:id])
  end

  def update
    if @ipo = Ipo.find(ipo_params)
      redirect_to ipo_path(@ipo)
    else
      render :edit
    end
  end

  def destroy
    @ipo = Ipo.find(params[:id])
    @ipo.destroy
    redirect_to deals_path
  end

  private

  def ipo_params
    params.require(:ipo).permit(:date, :name, :sector, :lead_underwriter, :valuation, :ipo_logo, :pdf_prospectus)
  end
end
