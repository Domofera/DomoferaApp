class TodosController < ApplicationController
  before_action :authenticate

  def index
    @todo = Todo.new
    @todos = @current_user.todos
    render "index", :layout => true
  end

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new todo_params.merge(:user_id => current_user.id)
    if @todo.save
      flash[:notice] = "Nueva tarea creada"
      redirect_to irrigation_user_path
    else
      flash[:notice] = @todo.errors.full_messages.to_a.join(", ")
      redirect_to irrigation_user_path
    end
  end

  def edit
    @todo = current_user.todos.find(params[:id])
  end

  def update
    @todo = current_user.todos.find(params[:id])
    @todo.update_attributes todo_params
    redirect_to irrigation_user_path
  end

  def destroy
    @todo = current_user.todos.find(params[:id])
    @todo.destroy
    redirect_to irrigation_user_path
  end

  private
  def todo_params
    params.require(:todo).permit(:content, :taskdate, :done)
  end
end
