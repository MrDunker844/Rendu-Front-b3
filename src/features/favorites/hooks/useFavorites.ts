import { useContext } from 'react';
import {
  FavoritesContext,
  type FavoritesContextValue,
} from '../context/favoritesContext.ts';

export default function useFavorites(): FavoritesContextValue {
  const favoritesContext = useContext(FavoritesContext);

  if (favoritesContext === null) {
    throw new Error('useFavorites doit être utilisé dans un FavoritesProvider');
  }

  return favoritesContext;
}
