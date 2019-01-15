class RecipesController < ApplicationController
    before_action :authenticate_user!

    def index
        @recipes = Recipe.all
        render json: @recipes
    end

    def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end

    def create
        @user = current_user
        @recipe = @user.recipes.create!(recipe_params)
    end

    def destroy
        @recipe = Recipe.find(params[:id]).destroy
        render json: 200
    end

private
def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :cal_per_serving, :servings, :instructions, :img)
end

end
