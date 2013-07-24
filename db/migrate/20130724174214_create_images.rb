class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.text :svg
      t.references :draws, index: true

      t.timestamps
    end
  end
end
