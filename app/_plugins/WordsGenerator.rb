require "nokogiri"

class MySubnavGenerator < Jekyll::Generator
  def generate(site)
    parser = Jekyll::Converters::Markdown.new(site.config)
    site.data["totalWords"] = 0
    unless site.collections["vocab"].nil?
      site.collections["vocab"].each do |page|
          if page.ext == ".markdown"
            doc = Nokogiri::HTML(parser.convert(page.content))
            page.data["words"] = []
            doc.css('[word]').each do |heading|
              page.data["words"] << { "title" => heading.text, "url" => [page.url, heading['id']].join("#") }
            end
            site.data["totalWords"] = site.data["totalWords"] + page.data["words"].size
          end
      end
    end
  end
end
