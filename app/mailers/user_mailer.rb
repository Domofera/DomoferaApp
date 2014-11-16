class UserMailer < ActionMailer::Base
  default from: "domofera.com"

  def signup_confirmation(user)
    @email    = user.email
    @link     = user_activation_link(user)
    @greeting = "Gracias por unirte a Domofera!"

    mail to: @email, subject: "Bienvenido a Domofera"
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
