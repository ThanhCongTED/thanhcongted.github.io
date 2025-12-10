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
exports.EwIconButton = void 0;
var icon_button_js_1 = require("@material/web/iconbutton/internal/icon-button.js");
var shared_styles_js_1 = require("@material/web/iconbutton/internal/shared-styles.js");
var standard_styles_js_1 = require("@material/web/iconbutton/internal/standard-styles.js");
var EwIconButton = /** @class */ (function (_super) {
    __extends(EwIconButton, _super);
    function EwIconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EwIconButton.styles = [shared_styles_js_1.styles, standard_styles_js_1.styles];
    return EwIconButton;
}(icon_button_js_1.IconButton));
exports.EwIconButton = EwIconButton;
customElements.define("ew-icon-button", EwIconButton);
