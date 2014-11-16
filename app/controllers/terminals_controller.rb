class TerminalsController < ApplicationController
	before_action :authenticate

	def index
		@terminal = Terminal.new
		#refresh_dom_with_partial('aside#sidebar', '/layouts/sidebar')
		render "index"
	end

	def new
		@terminal = Terminal.new
	end

	def create
			@terminal = Terminal.new terminal_params.merge(:user_id => current_user.id)
  			if @terminal.save
					create_and_add_sensors(@terminal.id)
  				flash[:notice] = "New terminal created succesfully!"
  			else
  				flash[:notice] = @terminal.errors.full_messages.to_a.join(", ")
  		    end
  		redirect_to user_terminal_path
	end

	def edit
		@terminal = current_user.terminals.find(params[:id])
	end

	def update
		@terminal = current_user.terminals.find(params[:id])
      if @terminal.update_attributes terminal_params
      	 flash[:notice] = "Terminal updated successfully!."
      else
      	 flash[:notice] = "Terminal could not be updated."
      end
      redirect_to user_terminal_path
	end

	def destroy
		@terminal = current_user.terminals.find(params[:id])
		if @terminal.destroy
			 flash[:notice] = "Terminal removed successfully!."
		else
			flash[:notice] = "Terminal could not be removed."
		end
		redirect_to user_terminal_path
	end

	private
	def terminal_params
		params.require(:terminal).permit(:name, :description, :password)
	end

	def create_and_add_sensors id
		Sensor.new(:terminal_id => id, :type => 'humidity')
		Sensor.new(:terminal_id => id, :type => 'humidityGround')
		Sensor.new(:terminal_id => id, :type => 'temperature')
		Sensor.new(:terminal_id => id, :type => 'ph')
		Sensor.new(:terminal_id => id, :type => 'light')
		Sensor.new(:terminal_id => id, :type => 'wind')
	end
end
