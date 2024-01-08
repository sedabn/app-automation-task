import config, { credentials } from '../config.js';
import Login from "../pom/Login.js";
import Menu from "../pom/Menu.js";

describe("Validate any error on the screen", () => {
  beforeEach(async () => {
    await Menu.menuBtn.click();
    await Menu.loginOption.click();
  });

  it("should throw an error when logging in with false credentials", async () => {
    await Login.inputUsername.setValue(credentials.invalidUsername);
    await Login.inputPassword.setValue(credentials.invalidPassword);

    await Login.loginBtn.click();

    await expect(Login.errorMessage).toHaveText("Provided credentials do not match any user in this service.");
  });
});
