class UsersController < ApplicationController
  before_action :logged_in_user, only: [:index, :edit, :update, :destroy]
  before_action :get_user, only: [:show, :edit, :update, :destroy, :following,
    :followers]
  before_action :correct_user, only: [:edit, :update]

  def index
    @users = User.by_user(params[:search]).paginate page: params[:page],
      per_page: Settings.users.page
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      log_in @user
      flash[:success] = t "register_success"
      redirect_to @user
    else
      flash[:danger] = t "register_failed"
      render :new
    end
  end

  def show
    @user_words = @user.user_words.by_status
    @activities = PublicActivity::Activity.order(created_at: :desc)
      .where(owner_id: @user, owner_type: User.name)
      .paginate page: params[:page]
  end

  def edit; end

  def update
    if @user.update_attributes user_params
      flash[:success] = t "profile_updated"
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy; end

  def following
    @title = t "following"
    @users = @user.following.paginate page: params[:page]
    render :show_follow
  end

  def followers
    @title = t "followers"
    @users = @user.followers.paginate page: params[:page]
    render :show_follow
  end

  private

  def user_params
    params.require(:user).permit :avatar, :username, :email, :password,
      :password_confirmation
  end

  def get_user
    @user = User.find_by id: params[:id]
    redirect_to root_url if @user.nil?
  end

  def correct_user
    redirect_to root_url unless current_user? @user
  end
end
