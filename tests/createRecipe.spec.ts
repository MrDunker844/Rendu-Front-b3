import { test, expect, type Page } from '@playwright/test';

async function fillValidRecipe(page: Page) {
  await page.getByLabel('Nom de la recette').fill('Tarte aux pommes');
  await page.getByLabel('Cuisine').fill('French');
  await page.getByLabel('Temps de préparation').fill('45');
  await page.getByLabel('Nombre de portions').fill('6');
  await page.getByLabel('Ingrédients').fill('Pommes\nPâte brisée');
  await page
    .getByLabel('Étapes de préparation')
    .fill('Éplucher les pommes\nCuire 30 minutes');
}

test.describe('Création d’une recette', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/nouvelle-recette');
  });

  test('crée une recette valide et affiche la confirmation', async ({
    page,
  }) => {
    await fillValidRecipe(page);
    await page.getByRole('button', { name: 'Créer la recette' }).click();

    const confirmation = page.getByRole('status');
    await expect(
      confirmation.getByRole('heading', {
        name: 'Recette « Tarte aux pommes » créée !',
      }),
    ).toBeVisible();
    await expect(confirmation).toContainText('Pâte brisée');
    await expect(confirmation).toContainText('Cuire 30 minutes');
  });

  test('affiche les erreurs et met le focus sur le premier champ si le formulaire est vide', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Créer la recette' }).click();

    await expect(
      page.getByText('Le nom de la recette est obligatoire.'),
    ).toBeVisible();
    await expect(page.getByText('La cuisine est obligatoire')).toBeVisible();
    await expect(
      page.getByText('Le temps de préparation est obligatoire.'),
    ).toBeVisible();
    await expect(
      page.getByText('Le nombre de portions est obligatoire.'),
    ).toBeVisible();
    await expect(
      page.getByText('Ajoutez au moins un ingrédient'),
    ).toBeVisible();
    await expect(page.getByText('Ajoutez au moins une étape')).toBeVisible();
    await expect(page.getByLabel('Nom de la recette')).toBeFocused();
  });

  test('refuse un nombre de portions non entier', async ({ page }) => {
    await fillValidRecipe(page);
    await page.getByLabel('Nombre de portions').fill('2.5');
    await page.getByRole('button', { name: 'Créer la recette' }).click();

    await expect(
      page.getByText('Entrez un nombre entier de portions'),
    ).toBeVisible();
    await expect(page.getByLabel('Nombre de portions')).toBeFocused();
  });

  test('en cas d’échec, garde la saisie et permet de réessayer', async ({
    page,
  }) => {
    // On simule une panne réseau sur l'appel de création.
    await page.route('**/recipes/add', (route) => route.abort());

    await fillValidRecipe(page);
    await page.getByRole('button', { name: 'Créer la recette' }).click();

    await expect(
      page.getByText("L'envoi de la recette a échoué"),
    ).toBeVisible();
    await expect(page.getByLabel('Nom de la recette')).toHaveValue(
      'Tarte aux pommes',
    );

    // Le réseau revient : « Réessayer » renvoie la même recette.
    await page.unroute('**/recipes/add');
    await page.getByRole('button', { name: 'Réessayer' }).click();

    await expect(
      page.getByRole('heading', {
        name: 'Recette « Tarte aux pommes » créée !',
      }),
    ).toBeVisible();
  });
});
