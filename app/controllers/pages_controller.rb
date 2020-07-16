class PagesController < ApplicationController
  def home
    @comments = Comment.all.order("date DESC")
    @dailyft = daily_articles
  end

  def daily_articles
    tab = []
    Article.where("date = ?", "2019-11-12").each.with_index  { |val| tab += [[val.title, val.url, stock_name(val.stock_id)]] }
    return tab
  end

  def stock_name(id)
    return Stock.find(id).name
  end
end
