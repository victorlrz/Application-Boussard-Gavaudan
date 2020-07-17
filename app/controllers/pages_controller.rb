class PagesController < ApplicationController
  def home
    @comments = Comment.all.order("date DESC")
    @dailyft = daily_articles
  end

  def daily_articles
    tab = Array.new
    Article.where("date = ?", Date.current).each  { |val| tab.push([val.title, val.url, stock_name(val.stock_id)]) }
    return tab
  end

  def stock_name(id)
    return Stock.find(id).name
  end
end
