class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.text :svg
      t.references :draw, index: true

      t.timestamps
    end
  end
end
