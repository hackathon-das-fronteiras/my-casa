class ImmobilesController < ApplicationController
  before_action :set_immobile, only: [:show, :update, :destroy]

  # GET /immobiles
  def index
    @immobiles = Immobile.all

    render json: @immobiles
  end

  # GET /immobiles/1
  def show
    render json: @immobile
  end

  # POST /immobiles
  def create
		@immobile = current_user.immobiles.build(immobile_params)

    if @immobile.save
      render json: @immobile, status: :created, location: @immobile
    else
      render json: @immobile.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /immobiles/1
  def update
    if @immobile.update(immobile_params)
      render json: @immobile
    else
      render json: @immobile.errors, status: :unprocessable_entity
    end
  end

  # DELETE /immobiles/1
  def destroy
    @immobile.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_immobile
      @immobile = Immobile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def immobile_params
      params.require(:immobile).permit(:title, :avatar, :price, :wich, :animal, :description)
    end
end
