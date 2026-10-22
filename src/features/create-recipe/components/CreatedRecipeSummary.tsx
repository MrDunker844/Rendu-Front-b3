import Button from '../../../shared/components/ui/Button.tsx';
import type { CreatedRecipe } from '../types/recipeForm.ts';

type CreatedRecipeSummaryProps = {
  recipe: CreatedRecipe;
  onCreateAnother: () => void;
};

export default function CreatedRecipeSummary({
  recipe,
  onCreateAnother,
}: CreatedRecipeSummaryProps) {
  return (
    <section
      role="status"
      className="flex flex-col gap-6 rounded-2xl border-2 border-success bg-success-light p-6"
    >
      <h2 className="font-display text-2xl font-bold text-success">
        ✅ Recette « {recipe.name} » créée !
      </h2>

      <dl className="grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted">Identifiant attribué par l'API</dt>
          <dd className="font-semibold">{recipe.id}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Cuisine</dt>
          <dd className="font-semibold">{recipe.cuisine}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Difficulté</dt>
          <dd className="font-semibold">{recipe.difficulty}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Préparation / portions</dt>
          <dd className="font-semibold">
            {recipe.prepTimeMinutes} min · {recipe.servings} portion(s)
          </dd>
        </div>
      </dl>

      <div>
        <h3 className="font-semibold">Ingrédients</h3>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Étapes de préparation</h3>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </div>

      <p className="text-sm text-muted">
        DummyJSON simule la création : la recette n'est pas réellement
        enregistrée sur le serveur.
      </p>

      <div>
        <Button variant="outline" onClick={onCreateAnother}>
          Créer une autre recette
        </Button>
      </div>
    </section>
  );
}
