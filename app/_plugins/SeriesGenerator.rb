
class SeriesGenerator < Jekyll::Generator
  def generate(site)
    unless site.posts.nil?
      site.posts.docs.each do |ps|
          if ps.extname == ".markdown" && ps.data["series"]
            ps.data["siblings"] = site.posts.docs.select { |p| p.data["series"] && p.data["series"][:name] == ps.data["series"][:name] }
            ps.data["siblings"] = ps.data["siblings"].sort_by { |p| p.data["series"][:index] }
          end
      end
    end
  end
end
