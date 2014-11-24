class UserMailer < ActionMailer::Base
  default from: "domofera.com"

  def signup_confirmation(user)
    @email    = user.email
    @link     = user_activation_link(user)
    @name     = user.username
    @greeting = "Gracias por unirte a Domofera!"

    #mail to: @email, subject: "Bienvenido a Domofera"
    message = {
     :subject=> "Hello from the Mandrill API",
     :from_name=> user,
     :text=>"Hi message, how are you?",
     :to=>[
       {
         :email=> @email,
         :name=> @name
       }
     ],
     :html=>"<html><h1>Hi <strong>message</strong>, how are you? -> <a href='@link'>Activar</a></h1></html>",
     :from_email=>"domofera.com"
    }
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
