import { test, expect } from '@playwright/test';

test.describe('Fiche détail d’une recette', () => {
  test('s’ouvre depuis une carte de la liste', async ({ page }) => {
    await page.goto('/recettes');
    await page.getByRole('link', { name: 'Classic Margherita Pizza' }).click();

    await expect(page).toHaveURL('/recettes/1');
    await expect(
      page.getByRole('heading', { level: 1, name: 'Classic Margherita Pizza' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Ingrédients' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Préparation' }),
    ).toBeVisible();
  });

  test('fonctionne en accès direct par l’URL', async ({ page }) => {
    await page.goto('/recettes/1');

    await expect(
      page.getByRole('heading', { level: 1, name: 'Classic Margherita Pizza' }),
    ).toBeVisible();
  });

  test('affiche une erreur pour une recette inexistante', async ({ page }) => {
    await page.goto('/recettes/9999');

    await expect(
      page.getByText('Impossible de charger cette recette.'),
    ).toBeVisible();
  });

  test('conserve la recherche après un aller-retour avec la liste', async ({
    page,
  }) => {
    await page.goto('/recettes');
    const searchField = page.getByRole('searchbox', {
      name: 'Rechercher une recette',
    });
    await searchField.fill('pizza');

    await page.getByRole('link', { name: 'Classic Margherita Pizza' }).click();
    await page.getByRole('link', { name: '← Retour aux recettes' }).click();

    await expect(searchField).toHaveValue('pizza');
  });
});
