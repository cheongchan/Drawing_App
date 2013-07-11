class CreateDraws < ActiveRecord::Migration
  def change
    create_table :draws do |t|
      t.string :drawing_url
      t.integer :privacy
      t.integer :views

      t.timestamps
    end
  end
end
