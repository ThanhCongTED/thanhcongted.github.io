"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialogStyles = void 0;
var lit_1 = require("lit");
// We set font-size to 16px and all the mdc typography styles
// because it defaults to rem, which means that the font-size
// of the host website would influence the ESP Web Tools dialog.
exports.dialogStyles = (0, lit_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :host {\n    --roboto-font: Roboto, system-ui;\n    --text-color: rgba(0, 0, 0, 0.6);\n    --danger-color: #db4437;\n\n    --md-sys-color-primary: #03a9f4;\n    --md-sys-color-on-primary: #fff;\n    --md-ref-typeface-brand: var(--roboto-font);\n    --md-ref-typeface-plain: var(--roboto-font);\n\n    --md-sys-color-surface: #fff;\n    --md-sys-color-surface-container: #fff;\n    --md-sys-color-surface-container-high: #fff;\n    --md-sys-color-surface-container-highest: #f5f5f5;\n    --md-sys-color-secondary-container: #e0e0e0;\n\n    --md-sys-typescale-headline-font: var(--roboto-font);\n    --md-sys-typescale-title-font: var(--roboto-font);\n  }\n\n  a {\n    color: var(--md-sys-color-primary);\n  }\n"], ["\n  :host {\n    --roboto-font: Roboto, system-ui;\n    --text-color: rgba(0, 0, 0, 0.6);\n    --danger-color: #db4437;\n\n    --md-sys-color-primary: #03a9f4;\n    --md-sys-color-on-primary: #fff;\n    --md-ref-typeface-brand: var(--roboto-font);\n    --md-ref-typeface-plain: var(--roboto-font);\n\n    --md-sys-color-surface: #fff;\n    --md-sys-color-surface-container: #fff;\n    --md-sys-color-surface-container-high: #fff;\n    --md-sys-color-surface-container-highest: #f5f5f5;\n    --md-sys-color-secondary-container: #e0e0e0;\n\n    --md-sys-typescale-headline-font: var(--roboto-font);\n    --md-sys-typescale-title-font: var(--roboto-font);\n  }\n\n  a {\n    color: var(--md-sys-color-primary);\n  }\n"])));
var templateObject_1;
