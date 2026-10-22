import type { Recipe } from '../../types/recipe.ts';
import Badge from '../ui/Badge.tsx';
import { Link } from 'react-router';
import { getRecipeDetailPath } from '../../routes.ts';

// Le ::after du lien recouvre toute la carte : elle devient cliquable en entier.
const CARD_LINK_CLASSES =
  'after:absolute after:inset-0 after:rounded-2xl after:content-[""] hover:text-brand';

type RecipeCardProps = {
  recipe: Recipe;
};
export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="aspect-video w-full object-cover"
      />
      <div className="flex flex-col gap-3 p-5">
        <h2 className="font-display text-xl font-bold">
          <Link
            to={getRecipeDetailPath(recipe.id)}
            className={CARD_LINK_CLASSES}
          >
            {recipe.name}
          </Link>
        </h2>
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
