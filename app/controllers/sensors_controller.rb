class SensorsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def new
    @sensor = Sensor.new
  end

  def create
    @user     = User.where(:username => data['username'])
    @terminal = Terminal.find(data['id'])
    @day      = Day.find(data['day'])
    if (data['password'] == @terminal.password)
      @sensor = Sensor.new(:day_id            => @day.id,
                           :humidity_air      => data['ha'],
                           :humidity_floor    => data['hf'],
                           :temperature_air   => data['ta'],
                           :temperature_floor => data['tf'],
                           :light             => data['l']
                          )
        if (@sensor.save)
          respond_to do |format|
            msg = { :status => "ok", :message => "Sensor created successfully"}
            format.json  { render :json => msg }
          end
        else
          flash[:notice] = @sensor.errors.full_messages.to_a.join(", ")
        end
    else
      flash[:notice] = "Ha habido un problema en el servidor. Inténtelo de nuevo más tarde."
    end
  end

  private
  def data
    params
  end
end
