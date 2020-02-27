class DealsController < ApplicationController
  def index
    @deals = Deal.all
    @acquirers = Acquirer.all
    @targets = Target.all
  end

  def new
    @deal = Deal.new
  end

  def create
    @deal = Deal.new(deal_params)
    if @deal.save!
      redirect_to deals_path
    else
      render :new
    end
  end

  def show
    @deal = Deal.find(params[:id])
  end

  def edit
    @deal = Deal.find(params[:id])
  end

  def update
    @deal = Deal.find(params[:id])
    if @deal.update(deal_params)
      redirect_to deal_path(@deal)
    else
      render :edit
    end
  end

  def destroy
    @deal = Deal.find(params[:id])
    @deal.destroy
    redirect_to deals_path
  end

  private

  def deal_params
    params.require(:deal).permit(:date, :premium, :payment_method, :valuation_multiple, :acquirer_id, :target_id, :pdf, :press_release, :payment_method, :valuation_type, :deal_value, :deal_currency, :comments, :bump, :private, :rumors)
  end
end
