class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  #helpers
  helper_method :authenticate
  helper_method :current_user

  def authenticate
    redirect_to root_path, alert: "Debes iniciar sesión primero" if current_user.nil?
  end

  def set_session(user)
    session[:token] = user.set_session_token
  end

  def current_user
    if session[:token]
      @current_user ||= User.find_by_session_token(session[:token])
    end
  end
  
  private
  def redirect_if_logged_in
    if current_user
      flash[:notice] = "Ya has iniciado sesión"
      redirect_to user_path
    end
  end

  def user_not_authorized(exception)
    policy_name = exception.policy.class.to_s.underscore
    flash[:error] = "No puedes ejecutar #{exception.query} debido a #{policy_name}."
    redirect_to(request.referrer || root_path)
  end
end
