/**
 * Copyright 2024 Defense Unicorns
 * SPDX-License-Identifier: AGPL-3.0-or-later OR LicenseRef-Defense-Unicorns-Commercial
 */

import { test, expect } from "@playwright/test";

function randomProjectName() {
  return `uds-package-sonarqube-${Math.floor((Math.random() * 1000))}`;
}

test('create a project', async ({ page }) => {
  await page.goto('/projects/create?mode=manual');

  const projectName = randomProjectName();

  await page.getByLabel('Project display name*').fill(projectName);
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByLabel('Use the global setting').check();
  await page.getByRole('button', { name: 'Create project' }).click();

  await expect(page).toHaveURL(`/tutorials?id=${projectName}`);

  await expect(page.getByRole('heading', { level: 1 })).toContainText('Analysis Method');
});
