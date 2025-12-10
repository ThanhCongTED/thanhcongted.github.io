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
exports.EwFilledSelect = void 0;
var filled_select_js_1 = require("@material/web/select/internal/filled-select.js");
var filled_select_styles_js_1 = require("@material/web/select/internal/filled-select-styles.js");
var shared_styles_js_1 = require("@material/web/select/internal/shared-styles.js");
var EwFilledSelect = /** @class */ (function (_super) {
    __extends(EwFilledSelect, _super);
    function EwFilledSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EwFilledSelect.styles = [shared_styles_js_1.styles, filled_select_styles_js_1.styles];
    return EwFilledSelect;
}(filled_select_js_1.FilledSelect));
exports.EwFilledSelect = EwFilledSelect;
customElements.define("ew-filled-select", EwFilledSelect);
