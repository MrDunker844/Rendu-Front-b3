import type { NewRecipe, RecipeFormValues } from '../types/recipeForm.ts';

export function splitLines(text: string): string[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line !== '');
}

export function toNewRecipe(values: RecipeFormValues): NewRecipe {
  return {
    name: values.name.trim(),
    cuisine: values.cuisine.trim(),
    difficulty: values.difficulty,
    prepTimeMinutes: Number(values.prepTimeMinutes),
    servings: Number(values.servings),
    ingredients: splitLines(values.ingredients),
    instructions: splitLines(values.instructions),
  };
}
