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
            @day = new_day(@terminal, data)
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
                msg = { :status => "ok", :message => "Sensor created successfully", :irrigation => checkIrrigation(@terminal)}
                render :json => msg
            else
                send_error
            end #end sensor saved
        else
            send_error
        end #end correct data
      else
        send_error
      end#end terminal
  end

  def send_error
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
          send_error
        end
      else
        send_error
      end #incorrect_data
    else
      send_error
    end #no_terminal
  end

  def last_data
    @terminal = Terminal.find_by_id(data['id'])
    if (@terminal)
      @user = User.find_by_id(@terminal.user_id)
      if (correctData(@terminal, @user, data))
        respond_to do |format|
          format.json {render :json => getLastData(@terminal) }
        end
      else
        send_error
      end
    else
      send_error
    end
  end

  def rv_data
    @terminal = Terminal.find_by_id(data['id'])
    if (@terminal)
      respond_to do |format|
        format.json {render :json => getLastData(@terminal) }
      end
    else
      send_error
    end
  end


  private
  def data
    params
  end

  def getLastData(terminal)
    if (terminal.days.last!=nil)
      return terminal.days.last
    end
  end

  def getDayData(terminal, day, month, year)
    terminal.days.where(:day_name => day, :month => month, :year => year)[0]
  end

  def getYearData(terminal, year)
    months = []
    12.times do |n|
      month = getMonthData(terminal, n+1, year);
      monthData = {
        "temperature_floor_min" => month.pluck(:temperature_floor_min).instance_eval { reduce(:+) / size.to_f },
        "temperature_floor_max" => month.pluck(:temperature_floor_max).instance_eval { reduce(:+) / size.to_f },
        "temperature_floor_average" => month.pluck(:temperature_floor_average).instance_eval { reduce(:+) / size.to_f },

        "humidity_floor_min" => month.pluck(:humidity_floor_min).instance_eval { reduce(:+) / size.to_f },
        "humidity_floor_max" => month.pluck(:humidity_floor_max).instance_eval { reduce(:+) / size.to_f },
        "humidity_floor_average" => month.pluck(:humidity_floor_average).instance_eval { reduce(:+) / size.to_f },

        "temperature_air_min" => month.pluck(:temperature_air_min).instance_eval { reduce(:+) / size.to_f },
        "temperature_air_max" => month.pluck(:temperature_air_max).instance_eval { reduce(:+) / size.to_f },
        "temperature_air_average" => month.pluck(:temperature_air_average).instance_eval { reduce(:+) / size.to_f },

        "humidity_air_min" => month.pluck(:humidity_air_min).instance_eval { reduce(:+) / size.to_f },
        "humidity_air_max" => month.pluck(:humidity_air_max).instance_eval { reduce(:+) / size.to_f },
        "humidity_air_average" => month.pluck(:humidity_air_average).instance_eval { reduce(:+) / size.to_f },

        "light_min" => month.pluck(:light_min).instance_eval { reduce(:+) / size.to_f },
        "light_max" => month.pluck(:light_max).instance_eval { reduce(:+) / size.to_f },
        "light_average" => month.pluck(:light_average).instance_eval { reduce(:+) / size.to_f },
      }
      months.push(monthData)
    end
    return months
  end

  def getMonthData(terminal, month, year)
    terminal.days.where(:month => month, :year => year)
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

  def new_day(terminal,data)
    return Day.new(:terminal_id => terminal.id,
                   :day_name    => data['day'],
                   :month       => data['month'],
                   :year        => data['year'],
                   :temperature_floor_max     => 0.0,
                   :temperature_floor_min     => 0.0,
                   :temperature_floor_average => 0.0,
                   :temperature_air_max       => 0.0,
                   :temperature_air_min       => 0.0,
                   :temperature_air_average   => 0.0,
                   :humidity_floor_max        => 0.0,
                   :humidity_floor_min        => 0.0,
                   :humidity_floor_average    => 0.0,
                   :humidity_air_max          => 0.0,
                   :humidity_air_min          => 0.0,
                   :humidity_air_average      => 0.0,
                   :light_max                 => 0.0,
                   :light_min                 => 0.0,
                   :light_average             => 0.0
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

  def checkIrrigation(terminal)
    return (
       (terminal.irrigation)
      #  &&
      #  (terminal.irrigation_start!=nil) &&
      #  (terminal.irrigation_end!=nil) &&
      #  (terminal.irrigation_start < DateTime.now) &&
      #  (terminal.irrigation_end > DateTime.now)
       )
  end
end
