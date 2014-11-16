class HomeController < ApplicationController
  def index
  		render "index", :layout => false
  end

  def login
    if current_user
      redirect_to user_path
    else
      render "login", :layout => false
    end
  end


  def about
    render "about", :layout => false
  end

  def error
  	render "error", :layout => false
  end
end
