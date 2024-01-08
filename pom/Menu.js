class Menu {
  get menuBtn() {
    return $("~tab bar option menu");
  }

  get loginOption() {
    return $('//XCUIElementTypeOther[@name="menu item log in"]');
  }
}

export default new Menu();
