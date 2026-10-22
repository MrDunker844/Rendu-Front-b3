import { useContext } from 'react';
import {
  RecipeFiltersContext,
  type RecipeFiltersContextValue,
} from '../context/recipeFiltersContext.ts';

export default function useRecipeFilters(): RecipeFiltersContextValue {
  const recipeFiltersContext = useContext(RecipeFiltersContext);
  if (recipeFiltersContext === null) {
    throw new Error(
      'useRecipeFilters doit être utilisé dans un RecipeFiltersProvider',
    );
  }
  return recipeFiltersContext;
}
