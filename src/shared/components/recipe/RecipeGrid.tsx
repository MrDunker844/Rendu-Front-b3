import RecipeCard from './RecipeCard.tsx';
import type { Recipe } from '../../types/recipe.ts';
type RecipeGridProps = { recipes: Recipe[] };

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
}
