class ChangeRangeToInteger < ActiveRecord::Migration
 def up
  	change_column :sections, :range, :integer
  end

  def down
  	change_column :sections, :range, :string
  end
end
