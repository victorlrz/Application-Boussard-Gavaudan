class AcquirersController < ApplicationController
  def index
    @acquirers = Acquirer.all
  end

  def new
    @acquirer = Acquirer.new
  end

  def create
    @acquirer = Acquirer.new(acquirer_params)
    if acquirer.save
      redirect_to deals_path
    else
      render :new
    end
  end

  def show
    @acquirer = Acquirer.find(params[:id])
  end

  def edit
    @acquirer = Acquirer.find(params[:id])
  end

  def update
    if acquirer.update(params[:id])
      redirect_to deals_path
    else
      render :edit
    end
  end

  private

  def acquirer_params
    params.require(:acquirer).permit(:name, :sector, :identifier, :url)
  end
end
