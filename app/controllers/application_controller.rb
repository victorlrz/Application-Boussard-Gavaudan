class ApplicationController < ActionController::Base
  acts_as_token_authentication_handler_for User
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :phone_number, :location, :first_name, :last_name, :tax_residency, :tax_number, :source_of_wealth])
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :company, :first_name, :last_name])
  end
end
