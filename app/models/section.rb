class Section < ActiveRecord::Base
  attr_accessible :anchor, :name, :url, :source_anchor, :range, :id

  has_many :stories

  def get_content
    stories.each { |s| s.delete }

    request = HTTParty.get(url)

    doc = Nokogiri::HTML(request.body)
    r = eval(range)

    doc.css(anchor)[r].each_with_index do |entry, index|

	  	story = self.stories.new
	  	story.title = entry.text
	  	story.url = entry[:href]
	  	
      if (id.to_i < 8)
        story.source = doc.css('#siteTable .domain a')[r.first + index].text
      end #end of if statement

      story.save

   	end #end of first entry do loop

  end #end of function
 
end #end of class
