class SensorsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def new
    @sensor = Sensor.new
  end

  def create
    @terminal = Terminal.find_by_id(data['id'])
    if (@terminal)
      @user = User.find_by_id(@terminal.user_id)
      if (correctData(@terminal, @user, data))
        @day = @terminal.days.find_by(day_name: data['day'], month: data['month'], year: data['year'])
          if (@day.nil?)
            @day = new_day(@terminal)
            @day.save
           end
          @sensor = Sensor.new(:day_id            => @day.id,
                               :humidity_air      => data['ha'],
                               :humidity_floor    => data['hf'],
                               :temperature_air   => data['ta'],
                               :temperature_floor => data['tf'],
                               :light             => data['l']
                              )
            if (@sensor.save)
              update_day_params(@day)
                msg = { :status => "ok", :message => "Sensor created successfully"}
                render :json => msg
            else
                sendError
            end #end sensor saved
        else
            sendError
        end #end correct data
      else
        sendError
      end#end terminal
  end

  def sendError
    respond_to do |format|
      msg = { :status => "bad", :message => 'Incorrect parameters'}
      format.json  { render :json => msg }
    end
  end

  def statistics
    @terminal = Terminal.find_by_id(data['id'])
    if (@terminal)
      @user = User.find_by_id(@terminal.user_id)
      if (correctDataStatistics(@terminal, @user, data))
        if (data['mode'] == 'd')
          respond_to do |format|
            format.json {render :json => getDayData(@terminal, data['day'], data['month'], data['year']) }
          end
        elsif (data['mode'] == 'm')
          respond_to do |format|
            format.json {render :json => getMonthData(@terminal, data['month'], data['year']) }
          end
        elsif (data['mode'] == 'y')
          respond_to do |format|
            format.json {render :json => getYearData(@terminal, data['year']) }
          end
        else
          sendError
        end
      else
        sendError
      end #incorrect_data
    else
      sendError
    end #no_terminal
  end


  private
  def data
    params
  end

  def getDayData(terminal, day, month, year)
    terminal.days.where(:day_name => day, :month => month, :year => year)[0]
  end

  def getYearData(terminal, year)
    terminal.days.where(:year => year)
  end

  def getMonthData(terminal, month, year)
    terminal.days.where(:month => month, :year => year)[0]
  end

  def isToday(day, month, year)
    return ((day == Time.now.day) && (month == Time.now.month) && (year == Time.now.year))
  end

  def correctData(terminal, user, data)
    return ((terminal) && (user) &&
            (data['password'] == terminal.password) &&
            (data['username'] == user.username))
  end

  def correctDataStatistics(terminal, user, data)
    return ((terminal) && (user) && (data['username'] == user.username))
  end

  def new_day(terminal)
    return Day.new(:terminal_id => terminal.id,
                   :day_name    => Time.now.day,
                   :month       => Time.now.month,
                   :year        => Time.now.year,
                   :temperature_floor_max     => 0,
                   :temperature_floor_min     => 0,
                   :temperature_floor_average => 0,
                   :temperature_air_max       => 0,
                   :temperature_air_min       => 0,
                   :temperature_air_average   => 0,
                   :humidity_floor_max        => 0,
                   :humidity_floor_min        => 0,
                   :humidity_floor_average    => 0,
                   :humidity_air_max          => 0,
                   :humidity_air_min          => 0,
                   :humidity_air_average      => 0,
                   :light_max                 => 0,
                   :light_min                 => 0,
                   :light_average             => 0
                  )
  end

  def update_day_params(day)
    day.update(
      :id                        => day.id,
      :temperature_floor_max     => day.sensors.pluck(:temperature_floor).max,
      :temperature_floor_min     => day.sensors.pluck(:temperature_floor).min,
      :temperature_floor_average => day.sensors.pluck(:temperature_floor).instance_eval { reduce(:+) / size.to_f },

      :temperature_air_max       => day.sensors.pluck(:temperature_air).max,
      :temperature_air_min       => day.sensors.pluck(:temperature_air).min,
      :temperature_air_average   => day.sensors.pluck(:temperature_air).instance_eval { reduce(:+) / size.to_f },

      :humidity_floor_max        => day.sensors.pluck(:humidity_floor).max,
      :humidity_floor_min        => day.sensors.pluck(:humidity_floor).min,
      :humidity_floor_average    => day.sensors.pluck(:humidity_floor).instance_eval { reduce(:+) / size.to_f },

      :humidity_air_max          => day.sensors.pluck(:humidity_air).max,
      :humidity_air_min          => day.sensors.pluck(:humidity_air).min,
      :humidity_air_average      => day.sensors.pluck(:humidity_air).instance_eval { reduce(:+) / size.to_f },

      :light_max                 => day.sensors.pluck(:light).max,
      :light_min                 => day.sensors.pluck(:light).min,
      :light_average             => day.sensors.pluck(:light).instance_eval { reduce(:+) / size.to_f }
    )
  end
end
