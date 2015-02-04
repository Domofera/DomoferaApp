class DaysController < ApplicationController
  before_action :authenticate

  def new
    @day = day.new
  end

  def create
    @day = day.new day_params
    if !@day.save
      flash[:notice] = @day.errors.full_messages.to_a.join(", ")
    end
  end

  def edit
    @day = get_day
  end

  def update
    @day = get_day
    @day.update_attributes day_params
  end

  private
  def day_params
    params.require(:day).permit(
                            :terminal_id,
                            :day_name,
                            :month,
                            :year,
                            :temperature_floor_max,
                            :temperature_floor_min,
                            :temperature_floor_average,
                            :temperature_air_min,
                            :temperature_air_max,
                            :temperature_air_average,
                            :humidity_floor_max,
                            :humidity_floor_min,
                            :humidity_floor_average,
                            :humidity_air_max,
                            :humidity_air_min,
                            :humidity_air_average,
                            :wind_max,
                            :wind_min,
                            :wind_average)
  end

  def get_day
    terminal = current_user.terminals.find(params[:terminal_id])
    day = terminal.days.find(params[:id])
  end
end
