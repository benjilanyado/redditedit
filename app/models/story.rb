class Story < ActiveRecord::Base
  attr_accessible :section_id, :source, :source_url, :title, :url

  belongs_to :section
end
