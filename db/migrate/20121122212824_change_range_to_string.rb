class ChangeRangeToString < ActiveRecord::Migration
 def up
  	change_column :sections, :range, :string
  end

  def down
  	change_column :sections, :range, :integer
  end
end
