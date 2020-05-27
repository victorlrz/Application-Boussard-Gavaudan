class Api::V1::ArticlesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :validate_api_key!
    
    def index
        articles = Comment.order('id DESC, created_at DESC');
        render json: {status: 'SUCCESS', message:'Loaded articles', data:articles},status: :ok
    end

    def show
        article = Comment.where(stock_id: Stock.find(params[:id]), is_scraped_file: true).order('id DESC, created_at DESC')
        render json: {status: 'SUCCESS', message:'Loaded article', data:article},status: :ok
    end

    def create
        article = Comment.new(article_params)
        if article.save
            render json: {status: 'SUCCESS', message:'Saved article', data:article},status: :ok
        else
            render json: {status: 'ERROR', message:'Article not saved', data:article.errors},status: :unprocessable_entity
        end
    end

    private
    def article_params
        params.permit(:id, :date, :category, :content, :source, :stock_id, :title, :cloudinary, :comment_link, :is_scraped_file)
    end

    def has_valid_api_key?
        request.headers['X-Api-key'] == ENV['API_KEY']
    end

    def validate_api_key!
        return head :forbidden unless has_valid_api_key?
    end
 end

 