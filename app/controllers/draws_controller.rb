class DrawsController < ApplicationController
  before_action :set_draw, only: [:show, :edit, :update, :destroy]

  # GET /draws
  # GET /draws.json
  def index
    @draws = Draw.all
  end

  # GET /draws/1
  # GET /draws/1.json
  def show
    @images = @draw.images.reverse
  end

  # GET /draws/new
  def new
    @draw = Draw.new
  end

  # GET /draws/1/edit
  def edit
  end

  # POST /draws
  # POST /draws.json
  def create
    @draw = Draw.new(draw_params)

    respond_to do |format|
      if @draw.save
        format.html { redirect_to @draw, notice: 'Draw was successfully created.' }
        format.json { render action: 'show', status: :created, location: @draw }
      else
        format.html { render action: 'new' }
        format.json { render json: @draw.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /draws/1
  # PATCH/PUT /draws/1.json
  def update
    respond_to do |format|
      if @draw.update(draw_params)
        format.html { redirect_to @draw, notice: 'Draw was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @draw.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /draws/1
  # DELETE /draws/1.json
  def destroy
    @draw.destroy
    respond_to do |format|
      format.html { redirect_to draws_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_draw
      @draw = Draw.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def draw_params
      params.require(:draw).permit(:drawing_url, :privacy, :views, :canvas_name)
    end
end
