task update_all_subreddits: :environment do
	Section.all.each do |sec|
		puts "Grabbing content from #{sub.name}"
		sec.get_content
		puts "Finished grabbing content from #{sub.name}"
	end
end