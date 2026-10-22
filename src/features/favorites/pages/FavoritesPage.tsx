import RecipeGrid from '../../../shared/components/recipe/RecipeGrid.tsx';
import ButtonLink from '../../../shared/components/ui/ButtonLink.tsx';
import EmptyState from '../../../shared/components/ui/EmptyState.tsx';
import { ROUTES } from '../../../shared/routes.ts';
import useFavorites from '../hooks/useFavorites.ts';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-4xl font-bold">Mes favoris</h1>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center gap-6">
          <EmptyState message="Vous n'avez encore sauvegardé aucune recette." />
          <ButtonLink to={ROUTES.recipes}>Découvrir les recettes</ButtonLink>
        </div>
      ) : (
        <RecipeGrid recipes={favorites} />
      )}
    </div>
  );
}
