class DocumentsController < ApplicationController
  def index
    @documents = Document.all
  end

  def show
    @document = Document.find(params[:id])
  end

  def create
    @document = Document.new(document_params)
    if @document.save
      redirect_to documents_path
    else
      render :new
    end
  end

  def edit
    @document = Document.find(params[:id])
  end

  def new
    @document = Document.new
  end

  def update
    @document = Document.find(params[:id])
    if @document.update(document_params)
      redirect_to documents_path
    else
      render :edit
    end
  end

  def destroy
  end

  private

  def document_params
    params.require(:document).permit(:name, :title, :date, :document_pdf, :category, :owner)
  end
end
