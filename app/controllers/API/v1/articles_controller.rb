module Api
    module V1
        class ArticlesController < ApplicationController
            skip_before_action :verify_authenticity_token

            def index
                articles = Comment.order('created_at DESC');
                render json: {status: 'SUCCESS', message:'Loaded articles', data:articles},status: :ok
            end

            def show
                article = Comment.where(stock_id: Comment.find(params[:id]))
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
                params.permit(:stock, :article, :date, :category, :content, :source, :stock_id, :title, :cloudinary, :comment_link)
            end
        end
    end
end
