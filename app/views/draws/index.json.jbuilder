json.array!(@draws) do |draw|
  json.extract! draw, :drawing_url, :privacy, :views
  json.url draw_url(draw, format: :json)
end
