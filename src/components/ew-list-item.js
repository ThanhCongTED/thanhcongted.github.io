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
exports.EwListItem = void 0;
var list_item_js_1 = require("@material/web/list/internal/listitem/list-item.js");
var list_item_styles_js_1 = require("@material/web/list/internal/listitem/list-item-styles.js");
var EwListItem = /** @class */ (function (_super) {
    __extends(EwListItem, _super);
    function EwListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EwListItem.styles = [list_item_styles_js_1.styles];
    return EwListItem;
}(list_item_js_1.ListItemEl));
exports.EwListItem = EwListItem;
customElements.define("ew-list-item", EwListItem);
