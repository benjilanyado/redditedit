task get_content: :environment do
	Section.all.each do |sec|
		puts "Grabbing content from #{sec.name}"
		sec.get_content
		puts "Finished grabbing content from #{sec.name}"
	end
end