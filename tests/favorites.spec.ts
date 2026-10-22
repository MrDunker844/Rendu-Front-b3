import { test, expect } from '@playwright/test';

test.describe('Favoris', () => {
  test('la page des favoris est vide au départ', async ({ page }) => {
    await page.goto('/favoris');

    await expect(
      page.getByText("Vous n'avez encore sauvegardé aucune recette."),
    ).toBeVisible();
  });

  test('ajoute un favori, le conserve après rechargement, puis le retire', async ({
    page,
  }) => {
    await page.goto('/recettes');
    const pizzaCard = page
      .getByRole('article')
      .filter({ hasText: 'Classic Margherita Pizza' });

    await pizzaCard
      .getByRole('button', { name: 'Ajouter aux favoris' })
      .click();
    await expect(
      pizzaCard.getByRole('button', { name: 'Retirer des favoris' }),
    ).toBeVisible();

    await page.getByRole('link', { name: 'Favoris' }).click();
    await page.reload();
    await expect(
      page.getByRole('link', { name: 'Classic Margherita Pizza' }),
    ).toBeVisible();

    await page.getByRole('button', { name: 'Retirer des favoris' }).click();
    await expect(
      page.getByText("Vous n'avez encore sauvegardé aucune recette."),
    ).toBeVisible();
  });
});
