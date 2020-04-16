class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to work_path
      flash.now[:notice] = "Your post was posted!"
    else
      flash.now[:alert] = "Failed to post."
      redirect_to new_post_path
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post.update_attributes(post_params)
      redirect_to post_path
    else
      redirect_to edit_post_path(id: params[:id])
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title,:body,:sub,:description,:thumbnail)
  end

end
