"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EwSelectOption = void 0;
var menu_item_styles_js_1 = require("@material/web/menu/internal/menuitem/menu-item-styles.js");
var select_option_js_1 = require("@material/web/select/internal/selectoption/select-option.js");
var EwSelectOption = /** @class */ (function (_super) {
    __extends(EwSelectOption, _super);
    function EwSelectOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EwSelectOption.styles = [menu_item_styles_js_1.styles];
    return EwSelectOption;
}(select_option_js_1.SelectOptionEl));
exports.EwSelectOption = EwSelectOption;
customElements.define("ew-select-option", EwSelectOption);
