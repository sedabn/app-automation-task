import Login from "../pom/Login.js";
import Menu from "../pom/Menu.js";

describe("Validate any text present on the screen", () => {
  beforeEach(async () => {
    await Menu.menuBtn.click();
    await Menu.loginOption.click();
  });

  it("should validate login title on the page", async () => {
    await expect(Login.pageTitle).toBeExisting();
    await expect(Login.pageTitle).toHaveText("Login");
  });
});
