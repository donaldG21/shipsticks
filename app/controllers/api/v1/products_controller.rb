class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: %i[ edit update destroy ]

  # READ
  # 1. Shows ALL products
  # GET /products
  def index
    @products = Product.all
    render json: @products, status: 200
  end

  # 2. Shows ONE product that best matches a given length/width/height/weight query
  # (For example, if I make an API request for a product with the following
  # dimensions: 48”l X 14”w X 12”h (@ 42lbs) the API should send me back “Golf - Small”.)
  # GET /products/search?height
  def show
    params.require([:weight, :height, :width, :length])
    product = Product.search(params)

    render json: product, status: 200
  end

  # CREATE
  # 1. Creates a product
  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product
    else
      render json: @product.errors
    end
  end

  # UPDATE
  # 1. Updates a product
  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors
    end
  end

  # DESTROY
  # 1. Deletes a product
  # DELETE /products/1
  def destroy
    @product.destroy

    render json: { notice: 'Product was successfully removed.' }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def product_params
    params.require(:product).permit(:name, :type, :length, :width, :height, :weight)
  end
end
