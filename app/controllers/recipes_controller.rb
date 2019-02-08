class RecipesController < ApplicationController
    before_action :authenticate_user!

    def index
        @user=current_user
        @recipes = current_user.recipes    
        render json: @recipes
    end

    def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end

    def create
        @user = current_user
        @recipe = @user.recipes.create!(recipe_params)
        # @recipes= @user.recipes
        render json: @recipe
    end

    def destroy
        @recipe = Recipe.find(params[:id]).destroy
        render json: 200
    end

private

def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :servings, :calories, :instructions, :img)
end

end
