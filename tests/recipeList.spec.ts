import { test, expect } from '@playwright/test';

test.describe('Liste des recettes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/recettes');
  });

  test('la recherche filtre les recettes et affiche un message sans résultat', async ({
    page,
  }) => {
    const searchField = page.getByRole('searchbox', {
      name: 'Rechercher une recette',
    });

    await searchField.fill('pizza');
    await expect(
      page.getByRole('link', { name: 'Classic Margherita Pizza' }),
    ).toBeVisible();

    await searchField.fill('zzzz');
    await expect(
      page.getByText('Aucune recette ne correspond à votre recherche.'),
    ).toBeVisible();
  });

  test('la pagination change de page', async ({ page }) => {
    await expect(page.getByText('Page 1 sur 6')).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Précédent' }),
    ).toBeDisabled();

    await page.getByRole('button', { name: 'Suivant' }).click();

    await expect(page.getByText('Page 2 sur 6')).toBeVisible();
  });

  test('changer un filtre ramène à la première page', async ({ page }) => {
    await page.getByRole('button', { name: 'Suivant' }).click();
    await expect(page.getByText('Page 2 sur 6')).toBeVisible();

    await page.getByLabel('Difficulté').selectOption('Easy');

    await expect(page.getByText(/^Page 1 sur \d+$/)).toBeVisible();
  });
});
