class TerminalsController < ApplicationController
	before_action :authenticate

	def index
		@terminal = Terminal.new
		@terminals = @current_user.terminals.order("terminals.created_at DESC")
		render "index", :layout => true
	end

	def show
		render "show", :layout => false
	end

	def new
		@terminal = Terminal.new
	end

	def create
			if current_user.terminals.count < 4
				@terminal = Terminal.new terminal_params.merge(:user_id => current_user.id)
	  			if @terminal.save
						create_first_day(@terminal.id)
	  				flash[:notice] = "Nuevo terminal creado"
	  			else
	  				flash[:notice] = @terminal.errors.full_messages.to_a.join(', ');
	  		  end
	  		redirect_to user_terminals_path
			else
				flash[:notice] = "Ya tienes 4 terminales, no puedes crear más"
				redirect_to user_terminals_path
			end
	end

	def edit
		@terminal = current_user.terminals.find(params[:id])
	end

	def update
		@terminal = current_user.terminals.find(params[:id])
      if @terminal.update_attributes terminal_params
      	 flash[:notice] = "Terminal actualizado"
      else
      	 flash[:notice] = "El terminal no puede ser actualizado"
      end
      redirect_to user_terminals_path
	end

	def destroy
		@terminal = current_user.terminals.find(params[:id])
		if @terminal.destroy
			 flash[:notice] = "Terminal eliminado"
		else
			flash[:notice] = "El terminal no puede ser eliminado"
		end
		redirect_to user_terminals_path
	end

	def get_terminal_file
		@terminal = Terminal.find_by_id(params['id'])
		@user     = User.find_by_id(@terminal.user_id)
		if correctData(@terminal, @user, params)
			msg = '{ "username" : "' + @user.username + '", "id" : ' + @terminal.id.to_s + ', "password" : ' + @terminal.password.to_s + '}'
			# render :json => msg
			send_data msg, :filename => 'config.json', :type => 'text/json'
		else
			msg = { :error => 'Data is incorrect'}
			render :json => msg
		end
	end

	private
	def terminal_params
		params.require(:terminal).permit(:name, :description, :password, :wifi_name,
		:wifi_password, :wifi_confirmation, :irrigation, :irrigation_start, :irrigation_end)
	end

	def create_first_day id
			Day.new(:terminal_id => id)
	end

	def correctData(terminal, user, data)
		return ((terminal) && (user) &&
						(data['password'] == terminal.password) &&
						(data['username'] == user.username))
	end
end
