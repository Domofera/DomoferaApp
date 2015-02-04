class TerminalsController < ApplicationController
	before_action :authenticate

	def index
		@terminal = Terminal.new
		@terminals = @current_user.terminals
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
      redirect_to user_terminal_path
	end

	def destroy
		@terminal = current_user.terminals.find(params[:id])
		if @terminal.destroy
			 flash[:notice] = "Terminal eliminado"
		else
			flash[:notice] = "El terminal no puede ser eliminado"
		end
		redirect_to user_terminal_path
	end

	private
	def terminal_params
		params.require(:terminal).permit(:name, :description, :password)
	end

	def create_first_day id
			Day.new(:terminal_id => id)
	end
end
