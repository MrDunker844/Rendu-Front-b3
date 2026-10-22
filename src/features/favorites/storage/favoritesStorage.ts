import type { Recipe } from '../../../shared/types/recipe.ts';

const FAVORITES_STORAGE_KEY = 'favorite-recipes';

export function loadFavorites(): Recipe[] {
  const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);

  if (savedFavorites === null) {
    return [];
  }

  try {
    return JSON.parse(savedFavorites);
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: Recipe[]): void {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
}
