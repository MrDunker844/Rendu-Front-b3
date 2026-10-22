import type { Recipe } from '../../../shared/types/recipe.ts';
import type { RecipeFilters } from '../types/recipeFilters.ts';

function matchesSearchText(recipe: Recipe, searchText: string): boolean {
  const normalizedRecipeName = recipe.name.toLowerCase();
  const normalizedSearchText = searchText.trim().toLowerCase();

  return normalizedRecipeName.includes(normalizedSearchText);
}

function matchesCuisine(recipe: Recipe, cuisine: string): boolean {
  return cuisine === '' || recipe.cuisine === cuisine;
}

function matchesDifficulty(
  recipe: Recipe,
  difficulty: RecipeFilters['difficulty'],
): boolean {
  return difficulty === '' || recipe.difficulty === difficulty;
}

export function filterRecipes(
  recipes: Recipe[],
  filters: RecipeFilters,
): Recipe[] {
  return recipes.filter(
    (recipe) =>
      matchesSearchText(recipe, filters.searchText) &&
      matchesCuisine(recipe, filters.cuisine) &&
      matchesDifficulty(recipe, filters.difficulty),
  );
}
