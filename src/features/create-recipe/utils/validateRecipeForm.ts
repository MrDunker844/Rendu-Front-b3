import type {
  RecipeFormErrors,
  RecipeFormValues,
} from '../types/recipeForm.ts';
import { splitLines } from './recipeFormConversion.ts';

const MIN_NAME_LENGTH = 3;
const MAX_PREP_TIME_MINUTES = 600;
const MAX_SERVINGS = 20;

function isWholeNumberBetween(text: string, min: number, max: number): boolean {
  const value = Number(text);
  return Number.isInteger(value) && value >= min && value <= max;
}

export function validateRecipeForm(values: RecipeFormValues): RecipeFormErrors {
  const errors: RecipeFormErrors = {};

  if (values.name.trim() === '') {
    errors.name = 'Le nom de la recette est obligatoire.';
  } else if (values.name.trim().length < MIN_NAME_LENGTH) {
    errors.name = `Le nom doit contenir au moins ${MIN_NAME_LENGTH} caractères.`;
  }

  if (values.cuisine.trim() === '') {
    errors.cuisine = 'La cuisine est obligatoire (ex. : Italian).';
  }

  if (values.prepTimeMinutes === '') {
    errors.prepTimeMinutes = 'Le temps de préparation est obligatoire.';
  } else if (
    !isWholeNumberBetween(values.prepTimeMinutes, 1, MAX_PREP_TIME_MINUTES)
  ) {
    errors.prepTimeMinutes = `Entrez un nombre entier de minutes entre 1 et ${MAX_PREP_TIME_MINUTES}.`;
  }

  if (values.servings === '') {
    errors.servings = 'Le nombre de portions est obligatoire.';
  } else if (!isWholeNumberBetween(values.servings, 1, MAX_SERVINGS)) {
    errors.servings = `Entrez un nombre entier de portions entre 1 et ${MAX_SERVINGS}.`;
  }

  if (splitLines(values.ingredients).length === 0) {
    errors.ingredients = 'Ajoutez au moins un ingrédient (un par ligne).';
  }

  if (splitLines(values.instructions).length === 0) {
    errors.instructions = 'Ajoutez au moins une étape (une par ligne).';
  }

  return errors;
}
