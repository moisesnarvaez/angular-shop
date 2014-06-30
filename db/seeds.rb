# Category
categories = []
categories << Category.find_or_create_by(name: 'Baby')
categories << Category.find_or_create_by(name: 'Clothes')
categories << Category.find_or_create_by(name: 'Tecno')

# Products
NAMES = "Lorem ipsum dolor sit amet consectetur adipiscing elit Morbi mattis convallis eleifend Sed sed eros enim Maecenas non congue est Cras porttitor nulla a viverra tempor Vestibulum enim lorem aliquam id elit vitae tristique sagittis lorem Nullam quis pellentesque velit Proin hendrerit lorem pellentesque arcu imperdiet sollicitudin Suspendisse sagittis tincidunt vestibulum Sed porttitor neque vel odio euismod tincidunt Nunc magna dui scelerisque at lorem lacinia malesuada mattis urna".split(" ")
NAMES_SIZE = NAMES.size - 1

def get_random_string(size)
  result = []
  for i in 1..size
    result << NAMES[rand(NAMES_SIZE)]
  end
  result.join(" ")
end

categories.each do |cat|
  title       = get_random_string(2)
  description = get_random_string(20)
  Product.create(title: title, description: description, category_id: cat.id, price: rand(99))
end
