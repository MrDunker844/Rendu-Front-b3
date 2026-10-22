import { test, expect } from '@playwright/test';

test('affiche la page 404 pour une URL inconnue', async ({ page }) => {
  await page.goto('/une-page-qui-nexiste-pas');

  await expect(
    page.getByRole('heading', { name: 'Page introuvable' }),
  ).toBeVisible();
});
