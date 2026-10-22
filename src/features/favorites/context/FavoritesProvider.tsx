import { useState, type ReactNode, useEffect } from 'react';
import type { Recipe } from '../../../shared/types/recipe.ts';
import { loadFavorites, saveFavorites } from '../storage/favoritesStorage.ts';
import { FavoritesContext } from './favoritesContext.ts';

type FavoritesProviderProps = {
  children: ReactNode;
};

export default function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState(loadFavorites);
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  function isFavorite(recipeId: number): boolean {
    return favorites.some((favorite) => favorite.id === recipeId);
  }

  function toggleFavorite(recipe: Recipe) {
    if (isFavorite(recipe.id)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== recipe.id));
    } else {
      setFavorites([...favorites, recipe]);
    }
  }

  return (
    <FavoritesContext value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext>
  );
}
