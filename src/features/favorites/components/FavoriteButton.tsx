import Button from '../../../shared/components/ui/Button.tsx';
import type { Recipe } from '../../../shared/types/recipe.ts';
import useFavorites from '../hooks/useFavorites.ts';

type FavoriteButtonProps = {
  recipe: Recipe;
};

export default function FavoriteButton({ recipe }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isSaved = isFavorite(recipe.id);

  return (
    <Button
      variant={isSaved ? 'primary' : 'outline'}
      onClick={() => toggleFavorite(recipe)}
    >
      {isSaved ? '♥ Retirer des favoris' : '♡ Ajouter aux favoris'}
    </Button>
  );
}
