import {
  FIELD_CLASSES,
  LABEL_CLASSES,
} from '../../../shared/components/ui/formStyles.ts';
import { DIFFICULTY_OPTIONS } from '../../../shared/constants.ts';
import type { RecipeFilters } from '../types/recipeFilters.ts';

type RecipeFiltersFormProps = {
  filters: RecipeFilters;
  cuisineOptions: string[];
  onFiltersChange: (newFilters: RecipeFilters) => void;
};

export default function RecipeFiltersForm({
  filters,
  cuisineOptions,
  onFiltersChange,
}: RecipeFiltersFormProps) {
  return (
    <form
      role="search"
      onSubmit={(event) => event.preventDefault()}
      className="grid gap-4 rounded-2xl bg-white p-5 shadow-md sm:grid-cols-3"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="recipe-search" className={LABEL_CLASSES}>
          Rechercher une recette
        </label>
        <input
          id="recipe-search"
          type="search"
          placeholder="Ex. : pizza, curry…"
          className={FIELD_CLASSES}
          value={filters.searchText}
          onChange={(event) =>
            onFiltersChange({ ...filters, searchText: event.target.value })
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="recipe-cuisine" className={LABEL_CLASSES}>
          Cuisine
        </label>
        <select
          id="recipe-cuisine"
          className={FIELD_CLASSES}
          value={filters.cuisine}
          onChange={(event) =>
            onFiltersChange({ ...filters, cuisine: event.target.value })
          }
        >
          <option value="">Toutes les cuisines</option>
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="recipe-difficulty" className={LABEL_CLASSES}>
          Difficulté
        </label>
        <select
          id="recipe-difficulty"
          className={FIELD_CLASSES}
          value={filters.difficulty}
          onChange={(event) =>
            onFiltersChange({
              ...filters,
              difficulty: event.target.value as RecipeFilters['difficulty'],
            })
          }
        >
          <option value="">Toutes les difficultés</option>
          {DIFFICULTY_OPTIONS.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
