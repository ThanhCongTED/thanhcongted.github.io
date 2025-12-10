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
exports.EwCircularProgress = void 0;
var circular_progress_js_1 = require("@material/web/progress/internal/circular-progress.js");
var circular_progress_styles_js_1 = require("@material/web/progress/internal/circular-progress-styles.js");
var EwCircularProgress = /** @class */ (function (_super) {
    __extends(EwCircularProgress, _super);
    function EwCircularProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EwCircularProgress.styles = [circular_progress_styles_js_1.styles];
    return EwCircularProgress;
}(circular_progress_js_1.CircularProgress));
exports.EwCircularProgress = EwCircularProgress;
customElements.define("ew-circular-progress", EwCircularProgress);
