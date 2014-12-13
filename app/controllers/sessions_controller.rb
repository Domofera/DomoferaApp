class SessionsController < ApplicationController
	before_filter :redirect_if_logged_in, only: [:new, :create]
  skip_before_filter :authenticate, only: [:new, :create]

	def new
	end

	def create
    user = User.find_by(username: session_params[:username])
    if user && user.confirmed && authenticate(user, session_params[:password])
      set_session(user)
      redirect_to user_path

    elsif user && !user.confirmed     # User has not confirmed his account yet and can not log in (customer support has to handle typos in emails on signup)
      user.update_attributes!(confirmation_token: SecureRandom.urlsafe_base64(24))   # we create a new token
      UserMailer.signup_confirmation(user).deliver                 # before sending a new confirmation email
      flash[:notice] = "Ups, parece que aún no has confirmado tu cuenta. Mira en tu bandeja de entrada."
      redirect_to root_path

    else
      flash[:notice] = "Nombre, email o contraseña incorrecto. Inténtalo de nuevo."
      redirect_to login_path
    end
  end

  def destroy
    current_user.update_attributes(session_token: nil)
    session[:token] = nil
    redirect_to root_path
  end

  private
    def session_params
      params.permit(:username, :email, :password)
    end

		def authenticate(user, password)
			if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
				true
			else
				false
			end
		end
end
