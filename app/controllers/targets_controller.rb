class TargetsController < ApplicationController
  def index
    @targets = Target.all
  end

  def new
    @target = Target.new
  end

  def create
    @target = Target.new(target_params)
    if @target.save
      redirect_to deals_path
    else
      render :new
    end
  end

  def show
    @target = Target.find(params[:id])
  end

  def edit
    @target = Target.find(params[:id])
  end

  def update
    @target = Target.find(params[:id])
    if @target.update(target_params)
      redirect_to deals_path
    else
      render :edit
    end
  end

  private

  def target_params
    params.require(:target).permit(:name, :sector, :description, :ceo, :annual_report, :target_logo, :ebitda, :revenues, :url, :identifier)
  end
end
