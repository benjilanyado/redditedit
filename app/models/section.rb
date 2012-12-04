class Section < ActiveRecord::Base
  attr_accessible :anchor, :name, :url, :source_anchor, :range, :id

  has_many :stories

  def get_content
    to_delete = stories.all

    request = HTTParty.get(url)

    doc = Nokogiri::HTML(request.body)
    r = eval(range)
    stories_added = 0
    
    doc.css(anchor)[r].each_with_index do |entry, index|

      story = self.stories.new
      story.title = entry.text
      story.url = entry[:href]
          
      if (id.to_i < 8)
        story.source = doc.css('#siteTable .domain a')[r.first + index].text
      end #end of if statement

      if story.save
        stories_added += 1
      end
    end
    
    if stories_added > 0
      to_delete.each { |s| s.delete }
    end
end
 
end #end of class
