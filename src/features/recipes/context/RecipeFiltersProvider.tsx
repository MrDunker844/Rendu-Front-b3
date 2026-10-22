import { useState, type ReactNode } from 'react';
import {
  DEFAULT_RECIPE_FILTERS,
  type RecipeFilters,
} from '../types/recipeFilters.ts';
import { RecipeFiltersContext } from './recipeFiltersContext.ts';

type RecipeFiltersProviderProps = {
  children: ReactNode;
};

export default function RecipeFiltersProvider({
  children,
}: RecipeFiltersProviderProps) {
  const [filters, setFilters] = useState(DEFAULT_RECIPE_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);

  function changeFilters(newFilters: RecipeFilters) {
    setFilters(newFilters);
    setCurrentPage(1);
  }

  return (
    <RecipeFiltersContext
      value={{
        filters,
        currentPage,
        changeFilters,
        changePage: setCurrentPage,
      }}
    >
      {children}
    </RecipeFiltersContext>
  );
}
