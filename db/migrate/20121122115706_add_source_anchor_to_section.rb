class AddSourceAnchorToSection < ActiveRecord::Migration
  def change
    add_column :sections, :source_anchor, :string
  end
end
