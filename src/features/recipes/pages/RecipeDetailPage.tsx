import { useParams } from 'react-router';
import ButtonLink from '../../../shared/components/ui/ButtonLink.tsx';
import ErrorMessage from '../../../shared/components/ui/ErrorMessage.tsx';
import LoadingSpinner from '../../../shared/components/ui/LoadingSpinner.tsx';
import { ROUTES } from '../../../shared/routes.ts';
import RecipeDetails from '../components/RecipeDetails.tsx';
import useRecipe from '../hooks/useRecipe.ts';

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipeId = Number(id);
  const { recipe, isLoading, errorMessage, retryFetchRecipe } =
    useRecipe(recipeId);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <ButtonLink to={ROUTES.recipes} variant="outline">
          ← Retour aux recettes
        </ButtonLink>
      </div>

      {isLoading && <LoadingSpinner label="Chargement de la recette…" />}

      {errorMessage && (
        <ErrorMessage message={errorMessage} onRetry={retryFetchRecipe} />
      )}

      {!isLoading && !errorMessage && recipe !== null && (
        <RecipeDetails recipe={recipe} />
      )}
    </div>
  );
}
