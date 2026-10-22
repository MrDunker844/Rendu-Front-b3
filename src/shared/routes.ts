export const ROUTES = {
  home: '/',
  recipes: '/recettes',
  recipeDetail: '/recettes/:id',
  favorites: '/favoris',
  createRecipe: '/nouvelle-recette',
};

export function getRecipeDetailPath(recipeId: number): string {
  return `${ROUTES.recipes}/${recipeId}`;
}
