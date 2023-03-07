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
      height: 10,
      width: 10,
      length: 10,
      weight: 10
    }
  end

  def self.search(params)
    nil
  end
end
