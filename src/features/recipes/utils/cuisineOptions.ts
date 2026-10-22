import type { Recipe } from '../../../shared/types/recipe.ts';

export function getCuisineOptions(recipes: Recipe[]): string[] {
  const allCuisines = recipes.map((recipe) => recipe.cuisine);
  const uniqueCuisines = new Set(allCuisines);

  return [...uniqueCuisines].sort();
}
