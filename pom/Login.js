class Login {
  get inputUsername() {
    return $('-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]');
  }

  get inputPassword() {
    return $('-ios predicate string:name == "Password input field"');
  }

  get loginBtn() {
    return $(
      '//*[@name="Login button"]'
    );
  }

  get errorMessage() {
    return $(
      '~Provided credentials do not match any user in this service.'
    );
  }

  get pageTitle() {
    return $('-ios class chain:**/XCUIElementTypeStaticText[`name == "Login"`]');
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginBtn.click();
  }
}

export default new Login();
