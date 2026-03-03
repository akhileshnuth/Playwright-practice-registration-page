import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Smoke Suite - Registration Page UI Validation', () => {

  test('Validate Registration Page Structure Completely', async ({ page }) => {

    const register = new RegisterPage(page);

    await register.validatePageStructure();

    await expect(page).toHaveURL(/Register.html/);
    await expect(page).toHaveTitle(/Register/);

  });

});