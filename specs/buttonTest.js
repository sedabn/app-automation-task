import config, { credentials } from '../config.js';
import Login from "../pom/Login.js";
import Menu from "../pom/Menu.js";

describe("Validate any button on the screen", () => {
  beforeEach(async () => {
    await Menu.menuBtn.click();
    await Menu.loginOption.click();
  });

  it("should check the login button", async () => {
    await Login.inputUsername.setValue(credentials.username);
    await Login.inputPassword.setValue(credentials.password);

    const loginButton = Login.loginBtn;

    await loginButton.waitForExist({ timeout: 5000 });
    await loginButton.waitForDisplayed({ timeout: 5000 });
    await expect(loginButton).toBeEnabled();
    await loginButton.click();

    await expect(Menu.menuBtn).toExist();
  });
});
