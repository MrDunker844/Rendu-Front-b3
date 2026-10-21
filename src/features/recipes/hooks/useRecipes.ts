import { useEffect, useState } from 'react';
import type { Recipe } from '../../../shared/types/recipe.ts';
import { fetchRecipes } from '../api/recipesApi.ts';

export default function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetchRecipes().then((loadedRecipes) => setRecipes(loadedRecipes));
  }, []);
  return recipes;
}
