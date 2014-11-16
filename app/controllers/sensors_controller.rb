class SensorsController < ApplicationController
  before_action :authenticate

  def new
    @sensor = Sensor.new
  end

  def edit
    @sensor = get_sensor
  end

  def update
    @sensor = get_sensor
      @sensor.update_attributes sensor_params
      redirect_to user_terminal_path
  end

  private
  def sensor_params
    params.require(:sensor).permit(:value, :terminal_id, :id)
  end

  def get_sensor
    terminal = current_user.terminals.find(params[:terminal_id])
    sensor = terminal.sensors.find(params[:id])
  end
end
