# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( compiled/script.js )
Rails.application.config.assets.precompile += %w( compiled/statistics.js )
Rails.application.config.assets.precompile += %w( compiled/calendar.js )
Rails.application.config.assets.precompile += %w( compiled/style.css )
Rails.application.config.assets.precompile += %w( compiled/fullcalendar.css )
