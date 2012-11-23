ActiveAdmin.register Section do


	batch_action :get_content do |selection|
		Section.find(selection).each do |sec|
			sec.get_content
		end
		
		flash[:notice] = "Grabbed content"
		redirect_to action: :index
	end
  
end
