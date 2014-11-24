class UserMailer < ActionMailer::Base
  default from: "domofera.com"
  require 'mandrill'

  def signup_confirmation(user)
    @email    = user.email
    @link     = user_activation_link(user)
    @name     = user.username
    @greeting = "Gracias por unirte a Domofera!"

    #mail to: @email, subject: "Bienvenido a Domofera"
    mandrill_mail template: 'signup_confirmation',
      subject: 'Bienvenido a domofera',
      to: {email: @email, name: @name},
      important: true,
      inline_css: true,
      async: true
  end

  private
    def user_activation_link(user)
      token     = user.confirmation_token
      base_url  = "http://domofera.com"
      path      = confirm_user_path
      "#{base_url}#{path}?confirmation_token=#{token}"
    end

    def users_link
      base_url  = "http://domofera.com"
      path      = user_path
      "#{base_url}#{path}"
    end

end
