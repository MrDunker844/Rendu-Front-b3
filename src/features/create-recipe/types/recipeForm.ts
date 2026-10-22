import type { Difficulty } from '../../../shared/types/recipe.ts';

// Les champs d'un formulaire contiennent toujours du texte :
// la conversion en nombres et en tableau se fait au moment de l'envoi.
export type RecipeFormValues = {
  name: string;
  cuisine: string;
  difficulty: Difficulty;
  prepTimeMinutes: string;
  servings: string;
  ingredients: string;
  instructions: string;
};

export type RecipeFormErrors = {
  name?: string;
  cuisine?: string;
  prepTimeMinutes?: string;
  servings?: string;
  ingredients?: string;
  instructions?: string;
};

export type NewRecipe = {
  name: string;
  cuisine: string;
  difficulty: Difficulty;
  prepTimeMinutes: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
};

export type CreatedRecipe = NewRecipe & { id: number };

export const EMPTY_RECIPE_FORM: RecipeFormValues = {
  name: '',
  cuisine: '',
  difficulty: 'Easy',
  prepTimeMinutes: '',
  servings: '',
  ingredients: '',
  instructions: '',
};
