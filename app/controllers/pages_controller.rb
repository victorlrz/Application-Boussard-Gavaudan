class PagesController < ApplicationController
  def home
    @comments = Comment.all.order("date DESC")
  end
end
