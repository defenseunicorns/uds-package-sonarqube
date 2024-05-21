import { test, expect } from "@playwright/test";

function randomProjectName() {
  return `uds-package-sonarqube-${Math.floor((Math.random() * 1000))}`;
}

test('create a project', async ({ page }) => {
  await page.goto('/projects/create');

  const projectName = randomProjectName();

  await page.getByRole('button', { name: 'Manually' }).click();
  await page.getByLabel('Project display name*').fill(projectName);
  await page.getByRole('button', { name: 'Set Up' }).click();

  await expect(page).toHaveURL(`/dashboard?id=${projectName}`);

  await expect(page.getByRole('heading', { level: 1 })).toContainText(projectName);
});
