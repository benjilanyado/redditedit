class AddRangeToSection < ActiveRecord::Migration
  def change
    add_column :sections, :range, :string
  end
end
