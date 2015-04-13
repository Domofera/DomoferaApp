require 'net/http'

def sendData(day, month, year, tam, tax, tfm, tfx, ham, hax, hfm, hfx, lm, lx)
  params = {
    "day"      => day,
    "month"    => month,
    "year"     => year,
    "ha"       => rand(ham..hax),
    "ta"       => rand(tam..tax),
    "hf"       => rand(hfm..hfx),
    "tf"       => rand(tfm..tfx),
    "l"        => rand(lm..lx),
    "id"       => 18,
    "username" => "elenatorro",
    "password" => 1234
  }

  http = Net::HTTP.new("localhost", 3000)
  request = Net::HTTP::Post.new("/api/sensors")
  request.set_form_data(params)
  response = http.request(request)

  puts response
end

def sendMonth(days, month, year, tam, tax, tfm, tfx, ham, hax, hfm, hfx, lm, lx)
  days.times do |n|
    sendDays(n+1, month, year, tam, tax, tfm, tfx, ham, hax, hfm, hfx, lm, lx)
  end
end

def sendDays(day, month, year, tam, tax, tfm, tfx, ham, hax, hfm, hfx, lm, lx)
  10.times do |n|
    sendData(day,month,year, tam, tax, tfm, tfx, ham, hax, hfm, hfx, lm, lx)
  end
end

sendMonth(31, 1, 2015, -20, 10, -40, 10, 40, 100, 40, 100, 0, 50);
sendMonth(28, 2, 2015, -10, 20, -30, 10, 50, 100, 30, 100, 0, 40);
sendMonth(31, 3, 2015,   0, 10, -20, 20, 50, 100, 40,  90, 0, 55);
sendMonth(30, 4, 2015,  10, 15, -10, 10, 50, 100, 40,  80, 0, 50);
sendMonth(31, 5, 2015,  10, 18, -5, 30, 40, 100, 50,  70, 20, 60);
sendMonth(30, 6, 2015,  15, 22,  10, 40, 20, 80,  30,  60, 30, 80);
sendMonth(31, 7, 2015,  15, 30,  10, 40, 20, 80,  30,  60, 35, 100);
sendMonth(31, 8, 2015,  25, 40,  20, 80, 10, 60,  10,  40, 40, 100);
sendMonth(30, 9, 2015,  15, 30,  10, 70, 10, 70,  10,  60, 30, 70);
sendMonth(31, 10, 2015, 10, 20,   8, 50, 10, 60,  40,  90, 20, 60);
sendMonth(30, 11, 2015,  0, 10,   8, 50, 10, 60,  40,  90, 20, 60);
sendMonth(31, 12, 2015,-10, 10,   0, 10, 20, 90,  40,  100, 15, 55);
