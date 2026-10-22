import type { Recipe } from '../../../shared/types/recipe.ts';
import { RECIPES_PER_PAGE } from '../../../shared/constants.ts';

export function getTotalPages(recipeCount: number): number {
  return Math.ceil(recipeCount / RECIPES_PER_PAGE);
}
export function getRecipesForPage(
  recipes: Recipe[],
  pageNumber: number,
): Recipe[] {
  const firstRecipeIndex = (pageNumber - 1) * RECIPES_PER_PAGE;
  const lastRecipeIndexExcluded = firstRecipeIndex + RECIPES_PER_PAGE;

  return recipes.slice(firstRecipeIndex, lastRecipeIndexExcluded);
}
