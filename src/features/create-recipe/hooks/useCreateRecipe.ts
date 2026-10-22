import { useRef, useState } from 'react';
import { createRecipe } from '../api/createRecipeApi.ts';
import type { CreatedRecipe, NewRecipe } from '../types/recipeForm.ts';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function useCreateRecipe() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [createdRecipe, setCreatedRecipe] = useState<CreatedRecipe | null>(
    null,
  );
  const lastSubmittedRecipe = useRef<NewRecipe | null>(null);

  function submitRecipe(newRecipe: NewRecipe) {
    lastSubmittedRecipe.current = newRecipe;
    setStatus('submitting');

    createRecipe(newRecipe)
      .then((recipe) => {
        setCreatedRecipe(recipe);
        setStatus('success');
      })
      .catch(() => setStatus('error'));
  }

  function retrySubmit() {
    if (lastSubmittedRecipe.current !== null) {
      submitRecipe(lastSubmittedRecipe.current);
    }
  }

  function startNewRecipe() {
    setCreatedRecipe(null);
    setStatus('idle');
  }

  return { status, createdRecipe, submitRecipe, retrySubmit, startNewRecipe };
}
