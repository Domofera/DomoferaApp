class UsersController < ApplicationController
	before_filter :redirect_if_logged_in, only: [:index, :new, :create, :confirm]
	skip_before_filter :authenticate, only: [:index, :new, :create, :confirm]

	def show
		@current_user = current_user
		render "show"
	end

	def statistics
		render "statistics"
	end

	def new
  	@user = User.new
  	render "new", :layout => false
	end

	def create
		token = SecureRandom.urlsafe_base64(24)
		@user = User.new user_params.merge(confirmation_token: token)
  		if @user.save
  			UserMailer.signup_confirmation(@user).deliver
  			flash[:notice] = "¡Último paso! Mira en tu bandeja de entrada, recibirás un email con el link de activación."
  			redirect_to root_path
  		else
  			flash[:notice] = @user.errors.full_messages.to_a.join(", ")
  			redirect_to new_user_path
  		end
	end

	def confirm
	    user = User.find_by_confirmation_token(params[:confirmation_token])
	    if user
				user.confirm!
	      set_session(user)
	      token = SecureRandom.urlsafe_base64(24)
	      redirect_to user_path
	    else
	      flash[:error] = "Este link es incorrecto, lo sentimos."
	      redirect_to new_user_path
	    end
  end

	def update
			if current_user.update_attributes user_params
				flash[:notice] = "Usuario actualizado."
			else
				flash[:notice] = "Sus datos no han podido ser actualizados."
			end
			redirect_to user_path
	end

	def destroy
		:authenticate
		if current_user.destroy
			flash[:notice] = "¡Usuario eliminado!"
		else
			flash[:notice] = "Sus datos no han podido ser eliminados"
		end
		redirect_to root_path
	end

	private
	def user_params
		params.require(:user).permit(:username, :email, :password, :password_confirmation, :city, :country)
	end
end
