class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :type, type: String
  field :length, type: Integer
  field :width, type: Integer
  field :height, type: Integer
  field :weight, type: Integer

  def self.get_each_max_dimension
    {
      height: desc(:height).limit(1).first.height,
      width: desc(:width).limit(1).first.width,
      length: desc(:length).limit(1).first.length,
      weight: desc(:weight).limit(1).first.weight
    }
  end

  def self.search(params)
    products = where(
      :weight.gte => params[:weight],
      :height.gte => params[:height],
      :width.gte => params[:width],
      :length.gte => params[:length]
    )

    products.min_by { |p| p.weight * p.height * p.width * p.length }
  end
end
