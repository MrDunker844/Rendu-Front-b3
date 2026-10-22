import EmptyState from '../../../shared/components/ui/EmptyState.tsx';
import ErrorMessage from '../../../shared/components/ui/ErrorMessage.tsx';
import LoadingSpinner from '../../../shared/components/ui/LoadingSpinner.tsx';
import Pagination from '../../../shared/components/ui/Pagination.tsx';
import RecipeGrid from '../../../shared/components/recipe/RecipeGrid.tsx';
import RecipeFiltersForm from '../components/RecipeFiltersForm.tsx';
import useRecipeFilters from '../hooks/useRecipeFilters.ts';
import useRecipes from '../hooks/useRecipes.ts';
import { getCuisineOptions } from '../utils/cuisineOptions.ts';
import { filterRecipes } from '../utils/filterRecipes.ts';
import { getRecipesForPage, getTotalPages } from '../utils/pagination.ts';

export default function RecipesPage() {
  const { recipes, isLoading, errorMessage, retryFetchRecipes } = useRecipes();
  const { filters, currentPage, changeFilters, changePage } =
    useRecipeFilters();

  const filteredRecipes = filterRecipes(recipes, filters);
  const cuisineOptions = getCuisineOptions(recipes);

  const totalPages = getTotalPages(filteredRecipes.length);
  const recipesOnCurrentPage = getRecipesForPage(filteredRecipes, currentPage);

  function handlePageChange(newPage: number) {
    changePage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-display text-4xl font-bold">Toutes les recettes</h1>

      {isLoading && <LoadingSpinner label="Chargement des recettes…" />}

      {errorMessage && (
        <ErrorMessage message={errorMessage} onRetry={retryFetchRecipes} />
      )}

      {!isLoading && !errorMessage && (
        <>
          <RecipeFiltersForm
            filters={filters}
            cuisineOptions={cuisineOptions}
            onFiltersChange={changeFilters}
          />

          {filteredRecipes.length === 0 ? (
            <EmptyState message="Aucune recette ne correspond à votre recherche." />
          ) : (
            <>
              <RecipeGrid recipes={recipesOnCurrentPage} />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
