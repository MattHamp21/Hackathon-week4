class Api::CharactersController < ApplicationController
    before_action :set_character, only: [:show, :update, :destroy]

    def index
        render json: Character.all
    end

    def show
        render json: @character
    end

    def create 
        character = Character.new(character_params)
        if(character.save)
            render json: character
        end
    end

    def update
        if @character.update(character_params)
            render json: @character
        else 
            render json: {errors: @character.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @character.destroy
    end

    private
    def set_character
        @character = Character.find(params[:id])
    end
    def movie_params
        return params.require(:character).permit(:name, :age, :game)
    end
end
