import { useEffect, useState } from 'react';
import type { Recipe } from '../../../shared/types/recipe.ts';
import { fetchRecipeById } from '../api/recipesApi.ts';

const LOAD_ERROR_MESSAGE =
  'Impossible de charger cette recette. Vérifiez votre connexion puis réessayez.';

export default function useRecipe(recipeId: number) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadCount, setReloadCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  function retryFetchRecipe() {
    setIsLoading(true);
    setErrorMessage(null);
    setReloadCount((prevState) => prevState + 1);
  }
  useEffect(() => {
    fetchRecipeById(recipeId)
      .then((loadedRecipes) => setRecipe(loadedRecipes))
      .catch(() => setErrorMessage(LOAD_ERROR_MESSAGE))
      .finally(() => setIsLoading(false));
  }, [reloadCount, recipeId]);

  return {
    recipe: recipe,
    isLoading: isLoading,
    errorMessage: errorMessage,
    retryFetchRecipe: retryFetchRecipe,
  };
}
