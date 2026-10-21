import { MOCK_RECIPES } from '../data/mockRecipes.ts';
import RecipeGrid from '../../../shared/components/recipe/RecipeGrid.tsx';
export default function RecipesPage() {
  return (
    <>
      <h1 className="font-display text-4xl font-bold">Toutes les recettes</h1>
      <RecipeGrid recipes={MOCK_RECIPES} />
    </>
  );
}
