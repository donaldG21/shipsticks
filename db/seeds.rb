products = JSON.parse(File.read(Rails.root.join('db/products.json')))['products']

products.each do |product|
  Product.find_or_create_by!(
    name: product['name'],
    type: product['type'],
    length: product['length'],
    width: product['width'],
    height: product['height'],
    weight: product['weight']
  )
end
