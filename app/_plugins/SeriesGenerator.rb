
class SeriesGenerator < Jekyll::Generator
  def generate(site)
    unless site.posts.nil?
      site.posts.each do |ps|
          if ps.ext == ".markdown" && ps.data["series"]
            ps.data["siblings"] = site.posts.select { |p| p.data["series"] && p.data["series"][:name] == ps.data["series"][:name] }
            ps.data["siblings"] = ps.data["siblings"].sort_by { |p| p.data["series"][:index] }
          end
      end
    end
  end
end
