class Products {
    get pageTitle() {
        return $('-ios class chain:**/XCUIElementTypeStaticText[`name == "Products"`]');
    }
}

export default new Products();
