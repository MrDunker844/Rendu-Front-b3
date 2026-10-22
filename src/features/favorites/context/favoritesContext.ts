import { createContext } from 'react';
import type { Recipe } from '../../../shared/types/recipe.ts';

export type FavoritesContextValue = {
  favorites: Recipe[];
  isFavorite: (recipeId: number) => boolean;
  toggleFavorite: (recipe: Recipe) => void;
};

export const FavoritesContext = createContext<FavoritesContextValue | null>(
  null,
);
