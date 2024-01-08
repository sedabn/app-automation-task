class Cart {
    get cartBtn() {
        return $('//XCUIElementTypeButton[@name="tab bar option cart"]');
    }

    get shoppingBtn() {
        return $('-ios class chain:**/XCUIElementTypeOther[`name == "Go Shopping button"`]');
    }
}

export default new Cart();
