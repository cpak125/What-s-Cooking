class RecipesController < ApplicationController
    before_action :authenticate_user!
    # load_and_authorize_resource only: [:destroy]

    def index
        @recipes = current_user.recipes    
        render json: @recipes
        # @recipes = Recipe.all
        # render json: @recipes
        # @users = User.joins(:recipes).includes(:recipes).all

        # @recipes = @users.flat_map do |user|
        #   user.recipes.map do |recipe|
        #     {
        #         id: recipe.id,
        #         name: recipe.name,
        #         ingredients: recipe.ingredients,
        #         cal_per_serving: recipe.cal_per_serving,
        #         servings: recipe.servings,
        #         instructions: recipe.instructions,
        #         belongs_to_current_user: recipe.user == current_user
        #     }
        #   end
        # end
       
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
        # @user = current_user
        @recipe = Recipe.find(params[:id]).destroy
        render json: 200
    end

private
def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :cal_per_serving, :servings, :instructions, :img)
end

end
