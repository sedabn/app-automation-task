import config, { credentials } from '../config.js';
import Login from "../pom/Login.js";
import Menu from "../pom/Menu.js";
import Product from '../pom/Product.js';
import Cart from "../pom/Cart.js"

describe("Test for product page", () => {
  beforeEach(async () => {
    await Menu.menuBtn.click();
    await Menu.loginOption.click();
    await Login.login(credentials.username, credentials.password);
  });

  it("should check for the Products title, click on the cart button and verify", async () => {
    await expect(Product.pageTitle).toBeExisting();
    await expect(Product.pageTitle).toHaveText("Products");
    await Cart.cartBtn.click();
    await expect(Cart.shoppingBtn).toExist();
  });
});
