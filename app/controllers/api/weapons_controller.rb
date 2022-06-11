class Api::WeaponsController < ApplicationController
    before_action :set_weapon, only: [:show, :update, :destroy]

    def index
        render json: Weapon.all
    end

    def show
        render json: @weapon
    end

    def create 
        weapon = Weapon.new(weapon_params)
        if(weapon.save)
            render json: weapon
        end
    end

    def update
        if @weapon.update(weapon_params)
            render json: @weapon
        else 
            render json: {errors: @weapon.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @weapon.destroy
    end

    private
    def set_weapon
        @weapon = Weapon.find(params[:id])
    end
    def weapon_params
        return params.require(:weapon).permit(:name, :weapon_type, :game)
    end
end
