import { createContext } from 'react';
import type { RecipeFilters } from '../types/recipeFilters.ts';

export type RecipeFiltersContextValue = {
  filters: RecipeFilters;
  currentPage: number;
  changeFilters: (newFilters: RecipeFilters) => void;
  changePage: (newPage: number) => void;
};

export const RecipeFiltersContext =
  createContext<RecipeFiltersContextValue | null>(null);
