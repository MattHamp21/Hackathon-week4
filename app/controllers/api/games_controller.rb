class Api::GamesController < ApplicationController
    before_action :set_game, only: [:show, :update, :destroy]

    def index
        render json: Game.all
    end

    def show
        render json: @game
    end

    def create 
        game = Game.new(game_params)
        if(game.save)
            render json: game
        end
    end

    def update
        if @game.update(game_params)
            render json: @game
        else 
            render json: {errors: @game.errors.full_messages}, status: 422
        end
    end

    def destroy
        render json: @game.destroy
    end

    private
    def set_game
        @game = Game.find(params[:id])
    end
    def game_params
        return params.require(:game).permit(:name, :year, :genre)
    end
end
