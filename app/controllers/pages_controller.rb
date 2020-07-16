class PagesController < ApplicationController
  def home
    @comments = Comment.all.order("date DESC")
    @dailyft = Article.where("date = ?", Date.today)  
  end
end
