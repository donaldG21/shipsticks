class HomeController < ApplicationController
  def index
    @products_max_dimensions = Product.get_each_max_dimension
  end
end
