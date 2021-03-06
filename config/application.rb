require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_model/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Domoferaapp
  class Application < Rails::Application
    config.before_configuration do
        env_file = File.join(Rails.root, 'config', 'initializers/app_env_vars.yml')
        YAML.load(File.open(env_file)).each do |key, value|
        ENV[key.to_s] = value
          end if File.exists?(env_file)

        config.assets.paths << Rails.root.join("app/assets/images/official/models");
    end

    config.action_dispatch.default_headers.merge!({
      "Access-Controll-Allow-Origin"  => "https://localhost/3000",
      "Access-Controll-Allow-Origin"  => "https://localhost/3000/user",
      "Access-Controll-Allow-Origin"  => "https://api.openweathermap.org/data/2.5/weather",
      "Access-Control-Allow-Methods"  => "POST, PUT, DELETE, GET, OPTIONS",
      "Access-Control-Request-Method" => "*",
      "Access-Control-Allow-Headers"  => "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      })


    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
  end
end
