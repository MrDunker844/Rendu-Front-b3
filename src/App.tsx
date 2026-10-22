import Footer from './shared/components/layout/Footer.tsx';
import Header from './shared/components/layout/Header.tsx';
import ScrollToTop from './shared/components/layout/ScrollToTop.tsx';
import { Route, Routes } from 'react-router';
import HomePage from './features/home/pages/HomePage.tsx';
import FavoritesPage from './features/favorites/pages/FavoritesPage.tsx';
import RecipesPage from './features/recipes/pages/RecipesPage.tsx';
import FavoritesProvider from './features/favorites/context/FavoritesProvider.tsx';
import RecipeFiltersProvider from './features/recipes/context/RecipeFiltersProvider.tsx';
import RecipeDetailPage from './features/recipes/pages/RecipeDetailPage.tsx';
import CreateRecipePage from './features/create-recipe/pages/CreateRecipePage.tsx';
import NotFoundPage from './shared/pages/NotFoundPage.tsx';
import { ROUTES } from './shared/routes.ts';
export default function App() {
  return (
    <FavoritesProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-8 sm:py-10">
          <RecipeFiltersProvider>
            <Routes>
              <Route path={ROUTES.home} element={<HomePage />} />
              <Route path={ROUTES.recipes} element={<RecipesPage />} />
              <Route
                path={ROUTES.recipeDetail}
                element={<RecipeDetailPage />}
              />
              <Route path={ROUTES.favorites} element={<FavoritesPage />} />
              <Route
                path={ROUTES.createRecipe}
                element={<CreateRecipePage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RecipeFiltersProvider>
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}
