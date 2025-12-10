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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EwFilledTextField = void 0;
var filled_styles_js_1 = require("@material/web/textfield/internal/filled-styles.js");
var filled_text_field_js_1 = require("@material/web/textfield/internal/filled-text-field.js");
var shared_styles_js_1 = require("@material/web/textfield/internal/shared-styles.js");
var static_html_js_1 = require("lit/static-html.js");
var EwFilledTextField = /** @class */ (function (_super) {
    __extends(EwFilledTextField, _super);
    function EwFilledTextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fieldTag = (0, static_html_js_1.literal)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["md-filled-field"], ["md-filled-field"])));
        return _this;
    }
    EwFilledTextField.styles = [shared_styles_js_1.styles, filled_styles_js_1.styles];
    return EwFilledTextField;
}(filled_text_field_js_1.FilledTextField));
exports.EwFilledTextField = EwFilledTextField;
customElements.define("ew-filled-text-field", EwFilledTextField);
var templateObject_1;
