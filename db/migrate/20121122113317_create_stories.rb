class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.text :title
      t.string :url
      t.string :source
      t.string :source_url
      t.integer :section_id

      t.timestamps
    end
  end
end
