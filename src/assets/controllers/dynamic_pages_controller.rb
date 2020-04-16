class DynamicPagesController < ApplicationController
  def home
  end

  def about
  end

  def work
    @projects = Post.where(sub: "work").order('created_at DESC')
  end

  def community
    @posts = Post.where(sub: "community")
  end

  def blog
    @blogs = Post.where(sub: "blog")
  end
end
