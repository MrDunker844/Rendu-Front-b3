import ErrorMessage from '../../../shared/components/ui/ErrorMessage.tsx';
import CreatedRecipeSummary from '../components/CreatedRecipeSummary.tsx';
import RecipeForm from '../components/RecipeForm.tsx';
import useCreateRecipe from '../hooks/useCreateRecipe.ts';

const SUBMIT_ERROR_MESSAGE =
  "L'envoi de la recette a échoué. Vos informations sont conservées : vous pouvez réessayer.";

export default function CreateRecipePage() {
  const { status, createdRecipe, submitRecipe, retrySubmit, startNewRecipe } =
    useCreateRecipe();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-4xl font-bold">Créer une recette</h1>

      {status === 'success' && createdRecipe !== null ? (
        <CreatedRecipeSummary
          recipe={createdRecipe}
          onCreateAnother={startNewRecipe}
        />
      ) : (
        <>
          <RecipeForm
            isSubmitting={status === 'submitting'}
            onValidSubmit={submitRecipe}
          />
          {/* Sous le formulaire, près du bouton d'envoi : visible sans avoir à remonter. */}
          {status === 'error' && (
            <ErrorMessage
              message={SUBMIT_ERROR_MESSAGE}
              onRetry={retrySubmit}
            />
          )}
        </>
      )}
    </div>
  );
}
