import { API_BASE_URL } from '../../../shared/constants.ts';
import type { CreatedRecipe, NewRecipe } from '../types/recipeForm.ts';

const CREATE_RECIPE_URL = `${API_BASE_URL}/recipes/add`;

export async function createRecipe(
  newRecipe: NewRecipe,
): Promise<CreatedRecipe> {
  const response = await fetch(CREATE_RECIPE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRecipe),
  });

  if (!response.ok) {
    throw new Error("Impossible d'enregistrer la recette.");
  }

  return response.json();
}
