import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Positive Suite - Complete Registration', () => {

  test('User should fill and submit registration form successfully', async ({ page }) => {

    const register = new RegisterPage(page);
    await register.navigate();
    await register.fillCompleteRegistrationForm();
    await register.validateEnteredValues();
    await register.clickSubmit();

  });

});