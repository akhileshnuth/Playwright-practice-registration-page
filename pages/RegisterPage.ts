import { Page, Locator, expect } from '@playwright/test';

export class RegisterPage {

  readonly page: Page;

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly address: Locator;
  readonly email: Locator;
  readonly phone: Locator;

  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;

  readonly hobbyCricket: Locator;
  readonly hobbyMovies: Locator;
  readonly hobbyHockey: Locator;

  readonly skillsDropdown: Locator;

  readonly countrySelect2: Locator;
  readonly countrySearchInput: Locator;
  readonly countryOptionIndia: Locator;

  readonly yearDropdown: Locator;
  readonly monthDropdown: Locator;
  readonly dayDropdown: Locator;

  readonly password: Locator;
  readonly confirmPassword: Locator;

  readonly submitButton: Locator;
  readonly refreshButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstName = page.locator("//input[@placeholder='First Name']");
    this.lastName = page.locator("//input[@placeholder='Last Name']");
    this.address = page.locator("//textarea[@ng-model='Adress']");
    this.email = page.locator("//input[@type='email']");
    this.phone = page.locator("//input[@type='tel']");

    this.maleRadio = page.locator("//input[@value='Male']");
    this.femaleRadio = page.locator("//input[@value='FeMale']");

    this.hobbyCricket = page.locator("//input[@value='Cricket']");
    this.hobbyMovies = page.locator("//input[@value='Movies']");
    this.hobbyHockey = page.locator("//input[@value='Hockey']");

    this.skillsDropdown = page.locator("//select[@id='Skills']");
    this.countrySelect2 = page.locator("//select[@id='country']");
    this.countrySearchInput = page.locator("//input[@type='search']");
    this.countryOptionIndia = page.locator("//li[contains(text(),'India')]");
    this.yearDropdown = page.locator("//select[@id='yearbox']");
    this.monthDropdown = page.locator("//select[@placeholder='Month']");
    this.dayDropdown = page.locator("//select[@id='daybox']");

    this.password = page.locator("//input[@id='firstpassword']");
    this.confirmPassword = page.locator("//input[@id='secondpassword']");

    this.submitButton = page.locator("//button[@id='submitbtn']");
    this.refreshButton = page.locator("//button[@id='Button1']");
  }

  async navigate() {
    await this.page.goto('/Register.html');
  }

  async validatePageStructure() {

    await this.navigate();
    await expect(this.page).toHaveTitle(/Register/);

    await expect(this.page.locator("//h1[contains(normalize-space(),'Automation Demo Site')]")).toBeVisible();
    await expect(this.page.locator("//a[normalize-space()='Register']")).toBeVisible();
    await expect(this.page.locator("//h2[normalize-space()='Register']")).toBeVisible();

    await expect(this.firstName).toBeVisible();
    await expect(this.lastName).toBeVisible();
    await expect(this.address).toBeVisible();
    await expect(this.email).toBeVisible();
    await expect(this.phone).toBeVisible();

    await expect(this.maleRadio).toBeVisible();
    await expect(this.femaleRadio).toBeVisible();

    await expect(this.hobbyCricket).toBeVisible();
    await expect(this.hobbyMovies).toBeVisible();
    await expect(this.hobbyHockey).toBeVisible();

    await expect(this.skillsDropdown).toBeVisible();

    await expect(this.yearDropdown).toBeVisible();
    await expect(this.monthDropdown).toBeVisible();
    await expect(this.dayDropdown).toBeVisible();

    await expect(this.password).toBeVisible();
    await expect(this.confirmPassword).toBeVisible();

    await expect(this.submitButton).toBeVisible();
    await expect(this.refreshButton).toBeVisible();
  }


  // Action Methods
  async fillFirstName(value: string) {
    await this.firstName.fill(value);
  }

  async fillLastName(value: string) {
    await this.lastName.fill(value);
  }

  async fillAddress(value: string) {
    await this.address.fill(value);
  }

  async fillEmail(value: string) {
    await this.email.fill(value);
  }

  async fillPhone(value: string) {
    await this.phone.fill(value);
  }

  async selectMale() {
    await this.maleRadio.check();
  }

  async selectHobbyCricket() {
    await this.hobbyCricket.check();
  }

  async selectHobbyMovies() {
    await this.hobbyMovies.check();
  }

  async selectSkill(skill: string) {
    await this.skillsDropdown.selectOption({ label: skill });
  }

  async selectCountry() {
    await this.countrySelect2.click();

    const searchBox = this.page.locator("//input[@class='select2-search__field']");
    await searchBox.waitFor({ state: 'visible' });
    await searchBox.fill('India');

    await this.page.locator("//li[contains(@class,'select2-results__option') and text()='India']").click();
    }

  async selectDOB(year: string, month: string, day: string) {
    await this.yearDropdown.selectOption(year);
    await this.monthDropdown.selectOption({ label: month });
    await this.dayDropdown.selectOption(day);
  }

  async fillPassword(value: string) {
    await this.password.fill(value);
  }

  async fillConfirmPassword(value: string) {
    await this.confirmPassword.fill(value);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async clickRefresh() {
    await this.refreshButton.click();
  }

  // Filling complete form
  async fillCompleteRegistrationForm() {

    await this.fillFirstName('Akhilesh');
    await this.fillLastName('N');
    await this.fillAddress('Palnadu, Andhra Pradesh');
    await this.fillEmail(`akhil@test.com`);
    await this.fillPhone('9876543210');

    await this.selectMale();
    await this.selectHobbyCricket();
    await this.selectHobbyMovies();

    await this.selectSkill('Python');
    await this.selectCountry();

    await this.selectDOB('2001', 'June', '09');

    await this.fillPassword('Test@123');
    await this.fillConfirmPassword('Test@123');
  }

  async validateEnteredValues() {

    await expect(this.firstName).toHaveValue('Akhilesh');
    await expect(this.lastName).toHaveValue('N');
    await expect(this.phone).toHaveValue('9876543210');
    await expect(this.password).toHaveValue('Test@123');
  }

}