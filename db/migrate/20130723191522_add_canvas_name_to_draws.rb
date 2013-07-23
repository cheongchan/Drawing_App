class AddCanvasNameToDraws < ActiveRecord::Migration
  def change
    add_column :draws, :canvas_name, :string
  end
end
