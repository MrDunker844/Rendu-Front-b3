import type { Recipe } from '../../types/recipe.ts';
import Badge from '../ui/Badge.tsx';

type RecipeCardProps = {
  recipe: Recipe;
};
export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-col gap-3 p-5">
        <h2 className="font-display text-xl font-bold">{recipe.name}</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="brand">{recipe.cuisine}</Badge>
          <Badge variant={recipe.difficulty === 'Easy' ? 'success' : 'warning'}>
            {recipe.difficulty}
          </Badge>
        </div>
        <p className="text-sm text-muted">
          <span aria-hidden="true">⏱</span>{' '}
          {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
        </p>
      </div>
    </article>
  );
}
