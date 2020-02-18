class TargetsController < ApplicationController
  def index
    @targets = Target.all
  end

  def new
    @targets = Target.new
  end

  def create
    @targets = Target.new(target_params)
    if acquirer.save
      redirect_to deals_path
    else
      render :new
    end
  end

  def show
    @targets = Target.find(params[:id])
  end

  def edit
    @targets = Target.find(params[:id])
  end

  def update
    if targets.update(params[:id])
      redirect_to deals_path
    else
      render :edit
    end
  end

  private

  def target_param
    params.require(:targets).permit(:name, :sector, :identifier, :url)
  end
end
