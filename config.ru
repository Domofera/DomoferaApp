# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment',  __FILE__)
# require "rest-client"

# RestClient.proxy = ENV['PROXIMO_URL'] if ENV['PROXIMO_URL']
# res = ResClient.get("la api que queremos utilizar")
#
# puts "status code", res.code
# puts "headers", res.headers
#

run Rails.application
