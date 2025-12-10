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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallButton = void 0;
var connect_1 = require("./connect");
var InstallButton = /** @class */ (function (_super) {
    __extends(InstallButton, _super);
    function InstallButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstallButton.prototype.connectedCallback = function () {
        var _this = this;
        if (this.renderRoot) {
            return;
        }
        this.renderRoot = this.attachShadow({ mode: "open" });
        if (!InstallButton.isSupported || !InstallButton.isAllowed) {
            this.toggleAttribute("install-unsupported", true);
            this.renderRoot.innerHTML = !InstallButton.isAllowed
                ? "<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>"
                : "<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>";
            return;
        }
        this.toggleAttribute("install-supported", true);
        var slot = document.createElement("slot");
        slot.addEventListener("click", function (ev) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ev.preventDefault();
                (0, connect_1.connect)(this);
                return [2 /*return*/];
            });
        }); });
        slot.name = "activate";
        var button = document.createElement("button");
        button.innerText = "Connect";
        slot.append(button);
        if ("adoptedStyleSheets" in Document.prototype &&
            "replaceSync" in CSSStyleSheet.prototype) {
            var sheet = new CSSStyleSheet();
            sheet.replaceSync(InstallButton.style);
            this.renderRoot.adoptedStyleSheets = [sheet];
        }
        else {
            var styleSheet = document.createElement("style");
            styleSheet.innerText = InstallButton.style;
            this.renderRoot.append(styleSheet);
        }
        this.renderRoot.append(slot);
    };
    InstallButton.isSupported = "serial" in navigator;
    InstallButton.isAllowed = window.isSecureContext;
    InstallButton.style = "\n  button {\n    position: relative;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: 500;\n    padding: 10px 24px;\n    color: var(--esp-tools-button-text-color, #fff);\n    background-color: var(--esp-tools-button-color, #03a9f4);\n    border: none;\n    border-radius: var(--esp-tools-button-border-radius, 9999px);\n  }\n  button::before {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    opacity: 0.2;\n    border-radius: var(--esp-tools-button-border-radius, 9999px);\n  }\n  button:hover::before {\n    background-color: rgba(255,255,255,.8);\n  }\n  button:focus {\n    outline: none;\n  }\n  button:focus::before {\n    background-color: white;\n  }\n  button:active::before {\n    background-color: grey;\n  }\n  :host([active]) button {\n    color: rgba(0, 0, 0, 0.38);\n    background-color: rgba(0, 0, 0, 0.12);\n    box-shadow: none;\n    cursor: unset;\n    pointer-events: none;\n  }\n  .hidden {\n    display: none;\n  }";
    return InstallButton;
}(HTMLElement));
exports.InstallButton = InstallButton;
customElements.define("esp-web-install-button", InstallButton);
