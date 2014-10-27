class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.authenticate(params[:username], params[:password])
    if user
      session[:user_id] = user.id
      redirect_to root_url, :notice => "Sesion iniciada con exito!"
    else
      flash.now.alert = "Email o nombre de usuario invalido."
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, :notice => "Sesion terminada!"
  end
end
