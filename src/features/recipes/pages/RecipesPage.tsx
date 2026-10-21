import useRecipes from '../hooks/useRecipes.ts';
import RecipeGrid from '../../../shared/components/recipe/RecipeGrid.tsx';
export default function RecipesPage() {
  const recipes = useRecipes();
  return (
    <>
      <h1 className="font-display text-4xl font-bold">Toutes les recettes</h1>
      <RecipeGrid recipes={recipes} />
    </>
  );
}
