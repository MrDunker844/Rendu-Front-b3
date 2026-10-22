import Badge from '../../../shared/components/ui/Badge.tsx';
import FavoriteButton from '../../favorites/components/FavoriteButton.tsx';
import type { Recipe } from '../../../shared/types/recipe.ts';

type RecipeDetailsProps = {
  recipe: Recipe;
};

function getKeyFacts(recipe: Recipe) {
  return [
    { label: 'Préparation', value: `${recipe.prepTimeMinutes} min` },
    { label: 'Cuisson', value: `${recipe.cookTimeMinutes} min` },
    { label: 'Portions', value: `${recipe.servings}` },
    { label: 'Calories / portion', value: `${recipe.caloriesPerServing} kcal` },
    {
      label: 'Note',
      value: `${recipe.rating} / 5 (${recipe.reviewCount} avis)`,
    },
  ];
}

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
  return (
    <article className="flex flex-col gap-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="aspect-video w-full rounded-2xl object-cover shadow-md lg:aspect-square"
        />

        <div className="flex flex-col gap-6">
          <h1 className="font-display text-4xl font-bold">{recipe.name}</h1>

          <div className="flex flex-wrap gap-2">
            <Badge variant="brand">{recipe.cuisine}</Badge>
            <Badge
              variant={recipe.difficulty === 'Easy' ? 'success' : 'warning'}
            >
              {recipe.difficulty}
            </Badge>
            {recipe.mealType.map((mealType) => (
              <Badge key={mealType}>{mealType}</Badge>
            ))}
          </div>

          <div>
            <FavoriteButton recipe={recipe} />
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {getKeyFacts(recipe).map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl bg-white p-4 shadow-md"
              >
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="font-display text-2xl font-bold">Ingrédients</h2>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
          <h2 className="font-display text-2xl font-bold">Préparation</h2>
          <ol className="flex list-decimal flex-col gap-3 pl-5">
            {recipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
