class Section < ActiveRecord::Base
  attr_accessible :anchor, :name, :url, :source_anchor, :range

  has_many :stories

    def get_content

    	range_value = "#{range}"

       	  self.stories.delete_all    

          request = HTTParty.get("#{url}")

          doc = Nokogiri::HTML(request.body)
    
       	 doc.css("#{anchor}")[eval(range)].each do |entry|

	  		story = self.stories.new
	  		story.title = entry.text
	  		story.url = entry[:href]
	  		story.save

  		end
                  

    end



  
end


	
