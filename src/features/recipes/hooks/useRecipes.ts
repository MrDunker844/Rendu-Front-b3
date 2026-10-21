import { useEffect, useState } from 'react';
import type { Recipe } from '../../../shared/types/recipe.ts';
import { fetchRecipes } from '../api/recipesApi.ts';

const LOAD_ERROR_MESSAGE =
  'Impossible de charger les recettes. Vérifiez votre connexion puis réessayez.';

export default function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadCount, setReloadCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function retryFetchRecipes() {
    setIsLoading(true);
    setErrorMessage(null);
    setReloadCount((prevState) => prevState + 1);
  }

  useEffect(() => {
    fetchRecipes()
      .then((loadedRecipes) => setRecipes(loadedRecipes))
      .catch(() => setErrorMessage(LOAD_ERROR_MESSAGE))
      .finally(() => setIsLoading(false));
  }, [reloadCount]);

  return { recipes, isLoading, errorMessage, retryFetchRecipes };
}
