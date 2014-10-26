class UsersController < ApplicationController

	def index
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(params[:user])
		if @user.save
			render "index", status: 201
		else
			render "new"
		end
	end

	def delete
	end
end
