import { useState, type FormEvent, useRef } from 'react';
import Button from '../../../shared/components/ui/Button.tsx';
import FormField from '../../../shared/components/ui/FormField.tsx';
import { getErrorId } from '../../../shared/components/ui/formFieldIds.ts';
import { FIELD_CLASSES } from '../../../shared/components/ui/formStyles.ts';
import { DIFFICULTY_OPTIONS } from '../../../shared/constants.ts';
import {
  EMPTY_RECIPE_FORM,
  type NewRecipe,
  type RecipeFormErrors,
  type RecipeFormValues,
} from '../types/recipeForm.ts';
import { toNewRecipe } from '../utils/recipeFormConversion.ts';
import { validateRecipeForm } from '../utils/validateRecipeForm.ts';

type RecipeFormProps = {
  isSubmitting: boolean;
  onValidSubmit: (newRecipe: NewRecipe) => void;
};

export default function RecipeForm({
  isSubmitting,
  onValidSubmit,
}: RecipeFormProps) {
  const [values, setValues] = useState(EMPTY_RECIPE_FORM);
  const [errors, setErrors] = useState<RecipeFormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  function handleFieldChange(fieldName: keyof RecipeFormValues, value: string) {
    setValues({ ...values, [fieldName]: value });
  }

  function getErrorProps(fieldName: keyof RecipeFormErrors) {
    const hasError = errors[fieldName] !== undefined;
    return {
      'aria-invalid': hasError,
      'aria-describedby': hasError ? getErrorId(fieldName) : undefined,
    };
  }

  function focusFirstInvalidField(newErrors: RecipeFormErrors) {
    const firstInvalidFieldName = Object.keys(newErrors)[0];
    if (firstInvalidFieldName !== undefined && formRef.current !== null) {
      const errorElement = formRef.current.elements.namedItem(
        firstInvalidFieldName,
      );
      if (errorElement instanceof HTMLElement) {
        errorElement.focus();
      }
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = validateRecipeForm(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      focusFirstInvalidField(newErrors);
      return;
    }

    onValidSubmit(toNewRecipe(values));
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-md"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Nom de la recette *"
          fieldId="name"
          error={errors.name}
        >
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(event) => handleFieldChange('name', event.target.value)}
            className={FIELD_CLASSES}
            {...getErrorProps('name')}
          />
        </FormField>

        <FormField label="Cuisine *" fieldId="cuisine" error={errors.cuisine}>
          <input
            id="cuisine"
            name="cuisine"
            type="text"
            placeholder="Ex. : Italian"
            value={values.cuisine}
            onChange={(event) =>
              handleFieldChange('cuisine', event.target.value)
            }
            className={FIELD_CLASSES}
            {...getErrorProps('cuisine')}
          />
        </FormField>

        <FormField label="Difficulté" fieldId="difficulty">
          <select
            id="difficulty"
            name="difficulty"
            value={values.difficulty}
            onChange={(event) =>
              handleFieldChange('difficulty', event.target.value)
            }
            className={FIELD_CLASSES}
          >
            {DIFFICULTY_OPTIONS.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Temps de préparation (minutes) *"
          fieldId="prepTimeMinutes"
          error={errors.prepTimeMinutes}
        >
          <input
            id="prepTimeMinutes"
            name="prepTimeMinutes"
            type="number"
            inputMode="numeric"
            value={values.prepTimeMinutes}
            onChange={(event) =>
              handleFieldChange('prepTimeMinutes', event.target.value)
            }
            className={FIELD_CLASSES}
            {...getErrorProps('prepTimeMinutes')}
          />
        </FormField>

        <FormField
          label="Nombre de portions *"
          fieldId="servings"
          error={errors.servings}
        >
          <input
            id="servings"
            name="servings"
            type="number"
            inputMode="numeric"
            value={values.servings}
            onChange={(event) =>
              handleFieldChange('servings', event.target.value)
            }
            className={FIELD_CLASSES}
            {...getErrorProps('servings')}
          />
        </FormField>
      </div>

      <FormField
        label="Ingrédients * (un par ligne)"
        fieldId="ingredients"
        error={errors.ingredients}
      >
        <textarea
          id="ingredients"
          name="ingredients"
          rows={6}
          value={values.ingredients}
          onChange={(event) =>
            handleFieldChange('ingredients', event.target.value)
          }
          className={FIELD_CLASSES}
          {...getErrorProps('ingredients')}
        />
      </FormField>

      <FormField
        label="Étapes de préparation * (une par ligne)"
        fieldId="instructions"
        error={errors.instructions}
      >
        <textarea
          id="instructions"
          name="instructions"
          rows={6}
          value={values.instructions}
          onChange={(event) =>
            handleFieldChange('instructions', event.target.value)
          }
          className={FIELD_CLASSES}
          {...getErrorProps('instructions')}
        />
      </FormField>

      <p className="text-sm text-muted">* Champs obligatoires</p>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours…' : 'Créer la recette'}
        </Button>
      </div>
    </form>
  );
}
