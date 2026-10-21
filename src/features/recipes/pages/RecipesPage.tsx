import ErrorMessage from '../../../shared/components/ui/ErrorMessage.tsx';
import LoadingSpinner from '../../../shared/components/ui/LoadingSpinner.tsx';
import RecipeGrid from '../../../shared/components/recipe/RecipeGrid.tsx';
import useRecipes from '../hooks/useRecipes.ts';

export default function RecipesPage() {
  const { recipes, isLoading, errorMessage, retryFetchRecipes } = useRecipes();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-4xl font-bold">Toutes les recettes</h1>

      {isLoading && <LoadingSpinner label="Chargement des recettes…" />}

      {errorMessage && (
        <ErrorMessage message={errorMessage} onRetry={retryFetchRecipes} />
      )}

      {!isLoading && !errorMessage && <RecipeGrid recipes={recipes} />}
    </div>
  );
}
