import { API_BASE_URL } from '../../../shared/constants.ts';
import type { RecipeResponse } from '../../../shared/types/recipe.ts';
import type { Recipe } from '../../../shared/types/recipe.ts';
const url = new URL(`${API_BASE_URL}/recipes?limit=0`);

export async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Impossible de charger les recettes.');
  }
  const data: RecipeResponse = await response.json();
  return data.recipes;
}

export async function fetchRecipeById(recipeId: number): Promise<Recipe> {
  const urlId = new URL(`${API_BASE_URL}/recipes/${recipeId}`);
  const response = await fetch(urlId);
  if (!response.ok) {
    throw new Error(`Impossible de charger la recette ${recipeId}.`);
  }
  return await response.json();
}
