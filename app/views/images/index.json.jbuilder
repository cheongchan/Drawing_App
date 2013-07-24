json.array!(@images) do |image|
  json.extract! image, :svg, :draws_id
  json.url image_url(image, format: :json)
end
