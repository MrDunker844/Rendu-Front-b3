import type { Difficulty } from '../../../shared/types/recipe.ts';

export type RecipeFilters = {
  searchText: string;
  cuisine: string;
  difficulty: Difficulty | '';
};

export const DEFAULT_RECIPE_FILTERS: RecipeFilters = {
  searchText: '',
  cuisine: '',
  difficulty: '',
};
