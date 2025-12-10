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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
exports.EwtInstallDialog = void 0;
var lit_1 = require("lit");
var decorators_js_1 = require("lit/decorators.js");
require("./components/ew-text-button");
require("./components/ew-list");
require("./components/ew-list-item");
require("./components/ew-divider");
require("./components/ew-checkbox");
require("./components/ewt-console");
require("./components/ew-dialog");
require("./components/ew-icon-button");
require("./components/ew-filled-text-field");
require("./components/ew-filled-select");
require("./components/ew-select-option");
require("./pages/ewt-page-progress");
require("./pages/ewt-page-message");
var svg_1 = require("./components/svg");
var serial_1 = require("improv-wifi-serial-sdk/dist/serial");
var const_1 = require("improv-wifi-serial-sdk/dist/const");
var flash_1 = require("./flash");
var file_download_1 = require("./util/file-download");
var fire_event_1 = require("./util/fire-event");
var sleep_1 = require("./util/sleep");
var manifest_1 = require("./util/manifest");
var styles_1 = require("./styles");
var version_1 = require("./version");
console.log("ESP Web Tools ".concat(version_1.version, " by Open Home Foundation; https://esphome.github.io/esp-web-tools/"));
var ERROR_ICON = "⚠️";
var OK_ICON = "🎉";
var EwtInstallDialog = function () {
    var _a;
    var _classSuper = lit_1.LitElement;
    var __client_decorators;
    var __client_initializers = [];
    var __client_extraInitializers = [];
    var __state_decorators;
    var __state_initializers = [];
    var __state_extraInitializers = [];
    var __installErase_decorators;
    var __installErase_initializers = [];
    var __installErase_extraInitializers = [];
    var __installConfirmed_decorators;
    var __installConfirmed_initializers = [];
    var __installConfirmed_extraInitializers = [];
    var __installState_decorators;
    var __installState_initializers = [];
    var __installState_extraInitializers = [];
    var __provisionForce_decorators;
    var __provisionForce_initializers = [];
    var __provisionForce_extraInitializers = [];
    var __error_decorators;
    var __error_initializers = [];
    var __error_extraInitializers = [];
    var __busy_decorators;
    var __busy_initializers = [];
    var __busy_extraInitializers = [];
    var __ssids_decorators;
    var __ssids_initializers = [];
    var __ssids_extraInitializers = [];
    var __selectedSsid_decorators;
    var __selectedSsid_initializers = [];
    var __selectedSsid_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(EwtInstallDialog, _super);
            function EwtInstallDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.logger = console;
                // null = NOT_SUPPORTED
                _this._client = __runInitializers(_this, __client_initializers, void 0);
                _this._state = (__runInitializers(_this, __client_extraInitializers), __runInitializers(_this, __state_initializers, "DASHBOARD"));
                _this._installErase = (__runInitializers(_this, __state_extraInitializers), __runInitializers(_this, __installErase_initializers, false));
                _this._installConfirmed = (__runInitializers(_this, __installErase_extraInitializers), __runInitializers(_this, __installConfirmed_initializers, false));
                _this._installState = (__runInitializers(_this, __installConfirmed_extraInitializers), __runInitializers(_this, __installState_initializers, void 0));
                _this._provisionForce = (__runInitializers(_this, __installState_extraInitializers), __runInitializers(_this, __provisionForce_initializers, false));
                _this._wasProvisioned = (__runInitializers(_this, __provisionForce_extraInitializers), false);
                _this._error = __runInitializers(_this, __error_initializers, void 0);
                _this._busy = (__runInitializers(_this, __error_extraInitializers), __runInitializers(_this, __busy_initializers, false));
                // undefined = not loaded
                // null = not available
                _this._ssids = (__runInitializers(_this, __busy_extraInitializers), __runInitializers(_this, __ssids_initializers, void 0));
                // Name of Ssid. Null = other
                _this._selectedSsid = (__runInitializers(_this, __ssids_extraInitializers), __runInitializers(_this, __selectedSsid_initializers, null));
                _this._bodyOverflow = (__runInitializers(_this, __selectedSsid_extraInitializers), null);
                _this._handleDisconnect = function () {
                    _this._state = "ERROR";
                    _this._error = "Disconnected";
                };
                return _this;
            }
            EwtInstallDialog.prototype.render = function () {
                var _b, _c, _d, _e, _f, _g, _h;
                if (!this.port) {
                    return (0, lit_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
                }
                var heading;
                var content;
                var allowClosing = false;
                // During installation phase we temporarily remove the client
                if (this._client === undefined &&
                    this._state !== "INSTALL" &&
                    this._state !== "LOGS") {
                    if (this._error) {
                        _b = this._renderError(this._error), heading = _b[0], content = _b[1];
                    }
                    else {
                        content = this._renderProgress("Connecting");
                    }
                }
                else if (this._state === "INSTALL") {
                    _c = this._renderInstall(), heading = _c[0], content = _c[1], allowClosing = _c[2];
                }
                else if (this._state === "ASK_ERASE") {
                    _d = this._renderAskErase(), heading = _d[0], content = _d[1];
                }
                else if (this._state === "ERROR") {
                    _e = this._renderError(this._error), heading = _e[0], content = _e[1];
                }
                else if (this._state === "DASHBOARD") {
                    _f = this._client
                        ? this._renderDashboard()
                        : this._renderDashboardNoImprov(), heading = _f[0], content = _f[1], allowClosing = _f[2];
                }
                else if (this._state === "PROVISION") {
                    _g = this._renderProvision(), heading = _g[0], content = _g[1];
                }
                else if (this._state === "LOGS") {
                    _h = this._renderLogs(), heading = _h[0], content = _h[1];
                }
                return (0, lit_1.html)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      <ew-dialog\n        open\n        .heading=", "\n        @cancel=", "\n        @closed=", "\n      >\n        ", "\n        ", "\n        ", "\n      </ew-dialog>\n    "], ["\n      <ew-dialog\n        open\n        .heading=", "\n        @cancel=", "\n        @closed=", "\n      >\n        ", "\n        ", "\n        ", "\n      </ew-dialog>\n    "])), heading, this._preventDefault, this._handleClose, heading ? (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["<div slot=\"headline\">", "</div>"], ["<div slot=\"headline\">", "</div>"])), heading) : "", allowClosing
                    ? (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n              <ew-icon-button slot=\"headline\" @click=", ">\n                ", "\n              </ew-icon-button>\n            "], ["\n              <ew-icon-button slot=\"headline\" @click=", ">\n                ", "\n              </ew-icon-button>\n            "])), this._closeDialog, svg_1.closeIcon) : "", content);
            };
            EwtInstallDialog.prototype._renderProgress = function (label, progress) {
                return (0, lit_1.html)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      <ewt-page-progress\n        slot=\"content\"\n        .label=", "\n        .progress=", "\n      ></ewt-page-progress>\n    "], ["\n      <ewt-page-progress\n        slot=\"content\"\n        .label=", "\n        .progress=", "\n      ></ewt-page-progress>\n    "])), label, progress);
            };
            EwtInstallDialog.prototype._renderError = function (label) {
                var heading = "Error";
                var content = (0, lit_1.html)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      <ewt-page-message\n        slot=\"content\"\n        .icon=", "\n        .label=", "\n      ></ewt-page-message>\n      <div slot=\"actions\">\n        <ew-text-button @click=", ">Close</ew-text-button>\n      </div>\n    "], ["\n      <ewt-page-message\n        slot=\"content\"\n        .icon=", "\n        .label=", "\n      ></ewt-page-message>\n      <div slot=\"actions\">\n        <ew-text-button @click=", ">Close</ew-text-button>\n      </div>\n    "])), ERROR_ICON, label, this._closeDialog);
                return [heading, content];
            };
            EwtInstallDialog.prototype._renderDashboard = function () {
                var _this = this;
                var heading = this._manifest.name;
                var content;
                var allowClosing = true;
                content = (0, lit_1.html)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      <div slot=\"content\">\n        <ew-list>\n          <ew-list-item>\n            <div slot=\"headline\">Connected to ", "</div>\n            <div slot=\"supporting-text\">\n              ", "&nbsp;", "\n              (", ")\n            </div>\n          </ew-list-item>\n          ", "\n          ", "\n          ", "\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">\n              ", "\n            </div>\n          </ew-list-item>\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">Logs & Console</div>\n          </ew-list-item>\n          ", "\n          ", "\n        </ew-list>\n      </div>\n    "], ["\n      <div slot=\"content\">\n        <ew-list>\n          <ew-list-item>\n            <div slot=\"headline\">Connected to ", "</div>\n            <div slot=\"supporting-text\">\n              ", "&nbsp;", "\n              (", ")\n            </div>\n          </ew-list-item>\n          ", "\n          ", "\n          ", "\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">\n              ", "\n            </div>\n          </ew-list-item>\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">Logs & Console</div>\n          </ew-list-item>\n          ", "\n          ", "\n        </ew-list>\n      </div>\n    "])), this._info.name, this._info.firmware, this._info.version, this._info.chipFamily, !this._isSameVersion
                    ? (0, lit_1.html)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                <ew-list-item\n                  type=\"button\"\n                  @click=", "\n                >\n                  ", "\n                  <div slot=\"headline\">\n                    ", "\n                  </div>\n                </ew-list-item>\n              "], ["\n                <ew-list-item\n                  type=\"button\"\n                  @click=", "\n                >\n                  ", "\n                  <div slot=\"headline\">\n                    ", "\n                  </div>\n                </ew-list-item>\n              "])), function () {
                        if (_this._isSameFirmware) {
                            _this._startInstall(false);
                        }
                        else if (_this._manifest.new_install_prompt_erase) {
                            _this._state = "ASK_ERASE";
                        }
                        else {
                            _this._startInstall(true);
                        }
                    }, svg_1.listItemInstallIcon, !this._isSameFirmware
                        ? "Install ".concat(this._manifest.name)
                        : "Update ".concat(this._manifest.name)) : "", this._client.nextUrl === undefined
                    ? ""
                    : (0, lit_1.html)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                <ew-list-item\n                  type=\"link\"\n                  href=", "\n                  target=\"_blank\"\n                >\n                  ", "\n                  <div slot=\"headline\">Visit Device</div>\n                </ew-list-item>\n              "], ["\n                <ew-list-item\n                  type=\"link\"\n                  href=", "\n                  target=\"_blank\"\n                >\n                  ", "\n                  <div slot=\"headline\">Visit Device</div>\n                </ew-list-item>\n              "])), this._client.nextUrl, svg_1.listItemVisitDevice), !this._manifest.home_assistant_domain ||
                    this._client.state !== const_1.ImprovSerialCurrentState.PROVISIONED
                    ? ""
                    : (0, lit_1.html)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                <ew-list-item\n                  type=\"link\"\n                  href=", "\n                  target=\"_blank\"\n                >\n                  ", "\n                  <div slot=\"headline\">Add to Home Assistant</div>\n                </ew-list-item>\n              "], ["\n                <ew-list-item\n                  type=\"link\"\n                  href=", "\n                  target=\"_blank\"\n                >\n                  ", "\n                  <div slot=\"headline\">Add to Home Assistant</div>\n                </ew-list-item>\n              "])), "https://my.home-assistant.io/redirect/config_flow_start/?domain=".concat(this._manifest.home_assistant_domain), svg_1.listItemHomeAssistant), function () {
                    _this._state = "PROVISION";
                    if (_this._client.state === const_1.ImprovSerialCurrentState.PROVISIONED) {
                        _this._provisionForce = true;
                    }
                }, svg_1.listItemWifi, this._client.state === const_1.ImprovSerialCurrentState.READY
                    ? "Connect to Wi-Fi"
                    : "Change Wi-Fi", function () { return __awaiter(_this, void 0, void 0, function () {
                    var client;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                client = this._client;
                                if (!client) return [3 /*break*/, 3];
                                return [4 /*yield*/, this._closeClientWithoutEvents(client)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, (0, sleep_1.sleep)(100)];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3:
                                // Also set `null` back to undefined.
                                this._client = undefined;
                                this._state = "LOGS";
                                return [2 /*return*/];
                        }
                    });
                }); }, svg_1.listItemConsole, this._isSameFirmware && this._manifest.funding_url
                    ? (0, lit_1.html)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n                <ew-list-item\n                  type=\"link\"\n                  href=", "\n                  target=\"_blank\"\n                >\n                  ", "\n                  <div slot=\"headline\">Fund Development</div>\n                </ew-list-item>\n              "], ["\n                <ew-list-item\n                  type=\"link\"\n                  href=", "\n                  target=\"_blank\"\n                >\n                  ", "\n                  <div slot=\"headline\">Fund Development</div>\n                </ew-list-item>\n              "])), this._manifest.funding_url, svg_1.listItemFundDevelopment) : "", this._isSameVersion
                    ? (0, lit_1.html)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                <ew-list-item\n                  type=\"button\"\n                  class=\"danger\"\n                  @click=", "\n                >\n                  ", "\n                  <div slot=\"headline\">Erase User Data</div>\n                </ew-list-item>\n              "], ["\n                <ew-list-item\n                  type=\"button\"\n                  class=\"danger\"\n                  @click=", "\n                >\n                  ", "\n                  <div slot=\"headline\">Erase User Data</div>\n                </ew-list-item>\n              "])), function () { return _this._startInstall(true); }, svg_1.listItemEraseUserData) : "");
                return [heading, content, allowClosing];
            };
            EwtInstallDialog.prototype._renderDashboardNoImprov = function () {
                var _this = this;
                var heading = this._manifest.name;
                var content;
                var allowClosing = true;
                content = (0, lit_1.html)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n      <div slot=\"content\">\n        <ew-list>\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">", "</div>\n          </ew-list-item>\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">Logs & Console</div>\n          </ew-list-item>\n        </ew-list>\n      </div>\n    "], ["\n      <div slot=\"content\">\n        <ew-list>\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">", "</div>\n          </ew-list-item>\n          <ew-list-item\n            type=\"button\"\n            @click=", "\n          >\n            ", "\n            <div slot=\"headline\">Logs & Console</div>\n          </ew-list-item>\n        </ew-list>\n      </div>\n    "])), function () {
                    if (_this._manifest.new_install_prompt_erase) {
                        _this._state = "ASK_ERASE";
                    }
                    else {
                        // Default is to erase a device that does not support Improv Serial
                        _this._startInstall(true);
                    }
                }, svg_1.listItemInstallIcon, "Install ".concat(this._manifest.name), function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        // Also set `null` back to undefined.
                        this._client = undefined;
                        this._state = "LOGS";
                        return [2 /*return*/];
                    });
                }); }, svg_1.listItemConsole);
                return [heading, content, allowClosing];
            };
            EwtInstallDialog.prototype._renderProvision = function () {
                var _this = this;
                var _b;
                var heading = "Configure Wi-Fi";
                var content;
                if (this._busy) {
                    return [
                        heading,
                        this._renderProgress(this._ssids === undefined
                            ? "Scanning for networks"
                            : "Trying to connect"),
                    ];
                }
                if (!this._provisionForce &&
                    this._client.state === const_1.ImprovSerialCurrentState.PROVISIONED) {
                    heading = undefined;
                    var showSetupLinks = !this._wasProvisioned &&
                        (this._client.nextUrl !== undefined ||
                            "home_assistant_domain" in this._manifest);
                    content = (0, lit_1.html)(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n        <div slot=\"content\">\n          <ewt-page-message\n            .icon=", "\n            label=\"Device connected to the network!\"\n          ></ewt-page-message>\n          ", "\n        </div>\n\n        ", "\n      "], ["\n        <div slot=\"content\">\n          <ewt-page-message\n            .icon=", "\n            label=\"Device connected to the network!\"\n          ></ewt-page-message>\n          ", "\n        </div>\n\n        ", "\n      "])), OK_ICON, showSetupLinks
                        ? (0, lit_1.html)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n                <ew-list>\n                  ", "\n                  ", "\n                  <ew-list-item\n                    type=\"button\"\n                    @click=", "\n                  >\n                    <div slot=\"start\" class=\"fake-icon\"></div>\n                    <div slot=\"headline\">Skip</div>\n                  </ew-list-item>\n                </ew-list>\n              "], ["\n                <ew-list>\n                  ", "\n                  ", "\n                  <ew-list-item\n                    type=\"button\"\n                    @click=", "\n                  >\n                    <div slot=\"start\" class=\"fake-icon\"></div>\n                    <div slot=\"headline\">Skip</div>\n                  </ew-list-item>\n                </ew-list>\n              "])), this._client.nextUrl === undefined
                            ? ""
                            : (0, lit_1.html)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n                        <ew-list-item\n                          type=\"link\"\n                          href=", "\n                          target=\"_blank\"\n                          @click=", "\n                        >\n                          ", "\n                          <div slot=\"headline\">Visit Device</div>\n                        </ew-list-item>\n                      "], ["\n                        <ew-list-item\n                          type=\"link\"\n                          href=", "\n                          target=\"_blank\"\n                          @click=", "\n                        >\n                          ", "\n                          <div slot=\"headline\">Visit Device</div>\n                        </ew-list-item>\n                      "])), this._client.nextUrl, function () {
                                _this._state = "DASHBOARD";
                            }, svg_1.listItemVisitDevice), !this._manifest.home_assistant_domain
                            ? ""
                            : (0, lit_1.html)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n                        <ew-list-item\n                          type=\"link\"\n                          href=", "\n                          target=\"_blank\"\n                          @click=", "\n                        >\n                          ", "\n                          <div slot=\"headline\">Add to Home Assistant</div>\n                        </ew-list-item>\n                      "], ["\n                        <ew-list-item\n                          type=\"link\"\n                          href=", "\n                          target=\"_blank\"\n                          @click=", "\n                        >\n                          ", "\n                          <div slot=\"headline\">Add to Home Assistant</div>\n                        </ew-list-item>\n                      "])), "https://my.home-assistant.io/redirect/config_flow_start/?domain=".concat(this._manifest.home_assistant_domain), function () {
                                _this._state = "DASHBOARD";
                            }, svg_1.listItemHomeAssistant), function () {
                            _this._state = "DASHBOARD";
                        }) : "", !showSetupLinks
                        ? (0, lit_1.html)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n              <div slot=\"actions\">\n                <ew-text-button\n                  @click=", "\n                >\n                  Continue\n                </ew-text-button>\n              </div>\n            "], ["\n              <div slot=\"actions\">\n                <ew-text-button\n                  @click=", "\n                >\n                  Continue\n                </ew-text-button>\n              </div>\n            "])), function () {
                            _this._state = "DASHBOARD";
                        }) : "");
                }
                else {
                    var error = void 0;
                    switch (this._client.error) {
                        case const_1.ImprovSerialErrorState.UNABLE_TO_CONNECT:
                            error = "Unable to connect";
                            break;
                        case const_1.ImprovSerialErrorState.TIMEOUT:
                            error = "Timeout";
                            break;
                        case const_1.ImprovSerialErrorState.NO_ERROR:
                        // Happens when list SSIDs not supported.
                        case const_1.ImprovSerialErrorState.UNKNOWN_RPC_COMMAND:
                            break;
                        default:
                            error = "Unknown error (".concat(this._client.error, ")");
                    }
                    var selectedSsid_1 = (_b = this._ssids) === null || _b === void 0 ? void 0 : _b.find(function (info) { return info.name === _this._selectedSsid; });
                    content = (0, lit_1.html)(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n        <ew-icon-button slot=\"headline\" @click=", ">\n          ", "\n        </ew-icon-button>\n        <div slot=\"content\">\n          <div>Connect your device to the network to start using it.</div>\n          ", "\n          ", "\n          ", "\n          ", "\n        </div>\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            ", "\n          </ew-text-button>\n          <ew-text-button @click=", ">Connect</ew-text-button>\n        </div>\n      "], ["\n        <ew-icon-button slot=\"headline\" @click=", ">\n          ", "\n        </ew-icon-button>\n        <div slot=\"content\">\n          <div>Connect your device to the network to start using it.</div>\n          ", "\n          ", "\n          "
                        // Show input box if command not supported or "Join Other" selected
                        , "\n          ", "\n        </div>\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            ", "\n          </ew-text-button>\n          <ew-text-button @click=", ">Connect</ew-text-button>\n        </div>\n      "])), this._updateSsids, svg_1.refreshIcon, error ? (0, lit_1.html)(templateObject_19 || (templateObject_19 = __makeTemplateObject(["<p class=\"error\">", "</p>"], ["<p class=\"error\">", "</p>"])), error) : "", this._ssids !== null
                        ? (0, lit_1.html)(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n                <ew-filled-select\n                  menu-positioning=\"fixed\"\n                  label=\"Network\"\n                  @change=", "\n                >\n                  ", "\n                  <ew-divider></ew-divider>\n                  <ew-select-option .selected=", ">\n                    Join other\u2026\n                  </ew-select-option>\n                </ew-filled-select>\n              "], ["\n                <ew-filled-select\n                  menu-positioning=\"fixed\"\n                  label=\"Network\"\n                  @change=", "\n                >\n                  ", "\n                  <ew-divider></ew-divider>\n                  <ew-select-option .selected=", ">\n                    Join other\u2026\n                  </ew-select-option>\n                </ew-filled-select>\n              "])), function (ev) {
                            var index = ev.target.selectedIndex;
                            // The "Join Other" item is always the last item.
                            _this._selectedSsid =
                                index === _this._ssids.length
                                    ? null
                                    : _this._ssids[index].name;
                        }, this._ssids.map(function (info) { return (0, lit_1.html)(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n                      <ew-select-option\n                        .selected=", "\n                        .value=", "\n                      >\n                        ", "\n                      </ew-select-option>\n                    "], ["\n                      <ew-select-option\n                        .selected=", "\n                        .value=", "\n                      >\n                        ", "\n                      </ew-select-option>\n                    "])), selectedSsid_1 === info, info.name, info.name); }), !selectedSsid_1) : "", 
                    // Show input box if command not supported or "Join Other" selected
                    !selectedSsid_1
                        ? (0, lit_1.html)(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n                  <ew-filled-text-field\n                    label=\"Network Name\"\n                    name=\"ssid\"\n                  ></ew-filled-text-field>\n                "], ["\n                  <ew-filled-text-field\n                    label=\"Network Name\"\n                    name=\"ssid\"\n                  ></ew-filled-text-field>\n                "]))) : "", !selectedSsid_1 || selectedSsid_1.secured
                        ? (0, lit_1.html)(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n                <ew-filled-text-field\n                  label=\"Password\"\n                  name=\"password\"\n                  type=\"password\"\n                ></ew-filled-text-field>\n              "], ["\n                <ew-filled-text-field\n                  label=\"Password\"\n                  name=\"password\"\n                  type=\"password\"\n                ></ew-filled-text-field>\n              "]))) : "", function () {
                        _this._state = "DASHBOARD";
                    }, this._installState && this._installErase ? "Skip" : "Back", this._doProvision);
                }
                return [heading, content];
            };
            EwtInstallDialog.prototype._renderAskErase = function () {
                var _this = this;
                var heading = "Erase device";
                var content = (0, lit_1.html)(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n      <div slot=\"content\">\n        <div>\n          Do you want to erase the device before installing\n          ", "? All data on the device will be lost.\n        </div>\n        <label class=\"formfield\">\n          <ew-checkbox touch-target=\"wrapper\" class=\"danger\"></ew-checkbox>\n          Erase device\n        </label>\n      </div>\n      <div slot=\"actions\">\n        <ew-text-button\n          @click=", "\n        >\n          Back\n        </ew-text-button>\n        <ew-text-button\n          @click=", "\n        >\n          Next\n        </ew-text-button>\n      </div>\n    "], ["\n      <div slot=\"content\">\n        <div>\n          Do you want to erase the device before installing\n          ", "? All data on the device will be lost.\n        </div>\n        <label class=\"formfield\">\n          <ew-checkbox touch-target=\"wrapper\" class=\"danger\"></ew-checkbox>\n          Erase device\n        </label>\n      </div>\n      <div slot=\"actions\">\n        <ew-text-button\n          @click=", "\n        >\n          Back\n        </ew-text-button>\n        <ew-text-button\n          @click=", "\n        >\n          Next\n        </ew-text-button>\n      </div>\n    "])), this._manifest.name, function () {
                    _this._state = "DASHBOARD";
                }, function () {
                    var checkbox = _this.shadowRoot.querySelector("ew-checkbox");
                    _this._startInstall(checkbox.checked);
                });
                return [heading, content];
            };
            EwtInstallDialog.prototype._renderInstall = function () {
                var _this = this;
                var heading;
                var content;
                var allowClosing = false;
                var isUpdate = !this._installErase && this._isSameFirmware;
                if (!this._installConfirmed && this._isSameVersion) {
                    heading = "Erase User Data";
                    content = (0, lit_1.html)(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n        <div slot=\"content\">\n          Do you want to reset your device and erase all user data from your\n          device?\n        </div>\n        <div slot=\"actions\">\n          <ew-text-button class=\"danger\" @click=", ">\n            Erase User Data\n          </ew-text-button>\n        </div>\n      "], ["\n        <div slot=\"content\">\n          Do you want to reset your device and erase all user data from your\n          device?\n        </div>\n        <div slot=\"actions\">\n          <ew-text-button class=\"danger\" @click=", ">\n            Erase User Data\n          </ew-text-button>\n        </div>\n      "])), this._confirmInstall);
                }
                else if (!this._installConfirmed) {
                    heading = "Confirm Installation";
                    var action = isUpdate ? "update to" : "install";
                    content = (0, lit_1.html)(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n        <div slot=\"content\">\n          ", "\n          Do you want to ", "\n          ", "&nbsp;", "?\n          ", "\n        </div>\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            Back\n          </ew-text-button>\n          <ew-text-button @click=", ">\n            Install\n          </ew-text-button>\n        </div>\n      "], ["\n        <div slot=\"content\">\n          ", "\n          Do you want to ", "\n          ", "&nbsp;", "?\n          ", "\n        </div>\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            Back\n          </ew-text-button>\n          <ew-text-button @click=", ">\n            Install\n          </ew-text-button>\n        </div>\n      "])), isUpdate
                        ? (0, lit_1.html)(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Your device is running\n                ", "&nbsp;", ".<br /><br />"], ["Your device is running\n                ", "&nbsp;", ".<br /><br />"])), this._info.firmware, this._info.version) : "", action, this._manifest.name, this._manifest.version, this._installErase
                        ? (0, lit_1.html)(templateObject_28 || (templateObject_28 = __makeTemplateObject(["<br /><br />All data on the device will be erased."], ["<br /><br />All data on the device will be erased."]))) : "", function () {
                        _this._state = "DASHBOARD";
                    }, this._confirmInstall);
                }
                else if (!this._installState ||
                    this._installState.state === "initializing" /* FlashStateType.INITIALIZING */ ||
                    this._installState.state === "preparing" /* FlashStateType.PREPARING */) {
                    heading = "Installing";
                    content = this._renderProgress("Preparing installation");
                }
                else if (this._installState.state === "erasing" /* FlashStateType.ERASING */) {
                    heading = "Installing";
                    content = this._renderProgress("Erasing");
                }
                else if (this._installState.state === "writing" /* FlashStateType.WRITING */ ||
                    // When we're finished, keep showing this screen with 100% written
                    // until Improv is initialized / not detected.
                    (this._installState.state === "finished" /* FlashStateType.FINISHED */ &&
                        this._client === undefined)) {
                    heading = "Installing";
                    var percentage = void 0;
                    var undeterminateLabel = void 0;
                    if (this._installState.state === "finished" /* FlashStateType.FINISHED */) {
                        // We're done writing and detecting improv, show spinner
                        undeterminateLabel = "Wrapping up";
                    }
                    else if (this._installState.details.percentage < 4) {
                        // We're writing the firmware under 4%, show spinner or else we don't show any pixels
                        undeterminateLabel = "Installing";
                    }
                    else {
                        // We're writing the firmware over 4%, show progress bar
                        percentage = this._installState.details.percentage;
                    }
                    content = this._renderProgress((0, lit_1.html)(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n          ", "\n          <br />\n          This will take\n          ", ".<br />\n          Keep this page visible to prevent slow down\n        "], ["\n          ", "\n          <br />\n          This will take\n          ", ".<br />\n          Keep this page visible to prevent slow down\n        "])), undeterminateLabel ? (0, lit_1.html)(templateObject_30 || (templateObject_30 = __makeTemplateObject(["", "<br />"], ["", "<br />"])), undeterminateLabel) : "", this._installState.chipFamily === "ESP8266"
                        ? "a minute"
                        : "2 minutes"), percentage);
                }
                else if (this._installState.state === "finished" /* FlashStateType.FINISHED */) {
                    heading = undefined;
                    var supportsImprov_1 = this._client !== null;
                    content = (0, lit_1.html)(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n        <ewt-page-message\n          slot=\"content\"\n          .icon=", "\n          label=\"Installation complete!\"\n        ></ewt-page-message>\n\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            Next\n          </ew-text-button>\n        </div>\n      "], ["\n        <ewt-page-message\n          slot=\"content\"\n          .icon=", "\n          label=\"Installation complete!\"\n        ></ewt-page-message>\n\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            Next\n          </ew-text-button>\n        </div>\n      "])), OK_ICON, function () {
                        _this._state =
                            supportsImprov_1 && _this._installErase
                                ? "PROVISION"
                                : "DASHBOARD";
                    });
                }
                else if (this._installState.state === "error" /* FlashStateType.ERROR */) {
                    heading = "Installation failed";
                    content = (0, lit_1.html)(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n        <ewt-page-message\n          slot=\"content\"\n          .icon=", "\n          .label=", "\n        ></ewt-page-message>\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            Back\n          </ew-text-button>\n        </div>\n      "], ["\n        <ewt-page-message\n          slot=\"content\"\n          .icon=", "\n          .label=", "\n        ></ewt-page-message>\n        <div slot=\"actions\">\n          <ew-text-button\n            @click=", "\n          >\n            Back\n          </ew-text-button>\n        </div>\n      "])), ERROR_ICON, this._installState.message, function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_b) {
                            this._initialize();
                            this._state = "DASHBOARD";
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [heading, content, allowClosing];
            };
            EwtInstallDialog.prototype._renderLogs = function () {
                var _this = this;
                var heading = "Logs";
                var content;
                content = (0, lit_1.html)(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n      <div slot=\"content\">\n        <ewt-console .port=", " .logger=", "></ewt-console>\n      </div>\n      <div slot=\"actions\">\n        <ew-text-button\n          @click=", "\n        >\n          Reset Device\n        </ew-text-button>\n        <ew-text-button\n          @click=", "\n        >\n          Download Logs\n        </ew-text-button>\n        <ew-text-button\n          @click=", "\n        >\n          Back\n        </ew-text-button>\n      </div>\n    "], ["\n      <div slot=\"content\">\n        <ewt-console .port=", " .logger=", "></ewt-console>\n      </div>\n      <div slot=\"actions\">\n        <ew-text-button\n          @click=", "\n        >\n          Reset Device\n        </ew-text-button>\n        <ew-text-button\n          @click=", "\n        >\n          Download Logs\n        </ew-text-button>\n        <ew-text-button\n          @click=", "\n        >\n          Back\n        </ew-text-button>\n      </div>\n    "])), this.port, this.logger, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.shadowRoot.querySelector("ewt-console").reset()];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, function () {
                    (0, file_download_1.textDownload)(_this.shadowRoot.querySelector("ewt-console").logs(), "esp-web-tools-logs.txt");
                    _this.shadowRoot.querySelector("ewt-console").reset();
                }, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, this.shadowRoot.querySelector("ewt-console").disconnect()];
                            case 1:
                                _b.sent();
                                this._state = "DASHBOARD";
                                this._initialize();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [heading, content];
            };
            EwtInstallDialog.prototype.willUpdate = function (changedProps) {
                if (!changedProps.has("_state")) {
                    return;
                }
                // Clear errors when changing between pages unless we change
                // to the error page.
                if (this._state !== "ERROR") {
                    this._error = undefined;
                }
                // Scan for SSIDs on provision
                if (this._state === "PROVISION") {
                    this._updateSsids();
                }
                else {
                    // Reset this value if we leave provisioning.
                    this._provisionForce = false;
                }
                if (this._state === "INSTALL") {
                    this._installConfirmed = false;
                    this._installState = undefined;
                }
            };
            EwtInstallDialog.prototype._updateSsids = function () {
                return __awaiter(this, arguments, void 0, function (tries) {
                    var oldSsids, ssids, err_1;
                    var _this = this;
                    if (tries === void 0) { tries = 0; }
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                oldSsids = this._ssids;
                                this._ssids = undefined;
                                this._busy = true;
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, this._client.scan()];
                            case 2:
                                ssids = _b.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _b.sent();
                                // When we fail while loading, pick "Join other"
                                if (this._ssids === undefined) {
                                    this._ssids = null;
                                    this._selectedSsid = null;
                                }
                                this._busy = false;
                                return [2 /*return*/];
                            case 4:
                                // We will retry a few times if we don't get any results
                                if (ssids.length === 0 && tries < 3) {
                                    console.log("SCHEDULE RETRY", tries);
                                    setTimeout(function () { return _this._updateSsids(tries + 1); }, 1000);
                                    return [2 /*return*/];
                                }
                                if (oldSsids) {
                                    // If we had a previous list, ensure the selection is still valid
                                    if (this._selectedSsid &&
                                        !ssids.find(function (s) { return s.name === _this._selectedSsid; })) {
                                        this._selectedSsid = ssids[0].name;
                                    }
                                }
                                else {
                                    this._selectedSsid = ssids.length ? ssids[0].name : null;
                                }
                                this._ssids = ssids;
                                this._busy = false;
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EwtInstallDialog.prototype.firstUpdated = function (changedProps) {
                _super.prototype.firstUpdated.call(this, changedProps);
                this._bodyOverflow = document.body.style.overflow;
                document.body.style.overflow = "hidden";
                this._initialize();
            };
            EwtInstallDialog.prototype.updated = function (changedProps) {
                _super.prototype.updated.call(this, changedProps);
                if (changedProps.has("_state")) {
                    this.setAttribute("state", this._state);
                }
                if (this._state !== "PROVISION") {
                    return;
                }
                if (changedProps.has("_selectedSsid") && this._selectedSsid === null) {
                    // If we pick "Join other", select SSID input.
                    this._focusFormElement("ew-filled-text-field[name=ssid]");
                }
                else if (changedProps.has("_ssids")) {
                    // Form is shown when SSIDs are loaded/marked not supported
                    this._focusFormElement();
                }
            };
            EwtInstallDialog.prototype._focusFormElement = function (selector) {
                if (selector === void 0) { selector = "ew-filled-text-field, ew-filled-select"; }
                var formEl = this.shadowRoot.querySelector(selector);
                if (formEl) {
                    formEl.updateComplete.then(function () { return setTimeout(function () { return formEl.focus(); }, 100); });
                }
            };
            EwtInstallDialog.prototype._initialize = function () {
                return __awaiter(this, arguments, void 0, function (justInstalled) {
                    var _b, err_2, client, timeout, _c, err_3;
                    var _this = this;
                    if (justInstalled === void 0) { justInstalled = false; }
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                if (this.port.readable === null || this.port.writable === null) {
                                    this._state = "ERROR";
                                    this._error =
                                        "Serial port is not readable/writable. Close any other application using it and try again.";
                                    return [2 /*return*/];
                                }
                                _d.label = 1;
                            case 1:
                                _d.trys.push([1, 3, , 4]);
                                _b = this;
                                return [4 /*yield*/, (0, manifest_1.downloadManifest)(this.manifestPath)];
                            case 2:
                                _b._manifest = _d.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_2 = _d.sent();
                                this._state = "ERROR";
                                this._error = "Failed to download manifest";
                                return [2 /*return*/];
                            case 4:
                                if (this._manifest.new_install_improv_wait_time === 0) {
                                    this._client = null;
                                    return [2 /*return*/];
                                }
                                client = new serial_1.ImprovSerial(this.port, this.logger);
                                client.addEventListener("state-changed", function () {
                                    _this.requestUpdate();
                                });
                                client.addEventListener("error-changed", function () { return _this.requestUpdate(); });
                                _d.label = 5;
                            case 5:
                                _d.trys.push([5, 7, , 8]);
                                timeout = !justInstalled
                                    ? 1000
                                    : this._manifest.new_install_improv_wait_time !== undefined
                                        ? this._manifest.new_install_improv_wait_time * 1000
                                        : 10000;
                                _c = this;
                                return [4 /*yield*/, client.initialize(timeout)];
                            case 6:
                                _c._info = _d.sent();
                                this._client = client;
                                client.addEventListener("disconnect", this._handleDisconnect);
                                return [3 /*break*/, 8];
                            case 7:
                                err_3 = _d.sent();
                                // Clear old value
                                this._info = undefined;
                                if (err_3 instanceof const_1.PortNotReady) {
                                    this._state = "ERROR";
                                    this._error =
                                        "Serial port is not ready. Close any other application using it and try again.";
                                }
                                else {
                                    this._client = null; // not supported
                                    this.logger.error("Improv initialization failed.", err_3);
                                }
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                });
            };
            EwtInstallDialog.prototype._startInstall = function (erase) {
                this._state = "INSTALL";
                this._installErase = erase;
                this._installConfirmed = false;
            };
            EwtInstallDialog.prototype._confirmInstall = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this._installConfirmed = true;
                                this._installState = undefined;
                                if (!this._client) return [3 /*break*/, 2];
                                return [4 /*yield*/, this._closeClientWithoutEvents(this._client)];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2:
                                this._client = undefined;
                                // Close port. ESPLoader likes opening it.
                                return [4 /*yield*/, this.port.close()];
                            case 3:
                                // Close port. ESPLoader likes opening it.
                                _b.sent();
                                (0, flash_1.flash)(function (state) {
                                    _this._installState = state;
                                    if (state.state === "finished" /* FlashStateType.FINISHED */) {
                                        (0, sleep_1.sleep)(100)
                                            // Flashing closes the port
                                            .then(function () { return _this.port.open({ baudRate: 115200, bufferSize: 8192 }); })
                                            .then(function () { return _this._initialize(true); })
                                            .then(function () { return _this.requestUpdate(); });
                                    }
                                    else if (state.state === "error" /* FlashStateType.ERROR */) {
                                        (0, sleep_1.sleep)(100)
                                            // Flashing closes the port
                                            .then(function () { return _this.port.open({ baudRate: 115200, bufferSize: 8192 }); });
                                    }
                                }, this.port, this.manifestPath, this._manifest, this._installErase);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EwtInstallDialog.prototype._doProvision = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var ssid, password, err_4;
                    var _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                this._busy = true;
                                this._wasProvisioned =
                                    this._client.state === const_1.ImprovSerialCurrentState.PROVISIONED;
                                ssid = this._selectedSsid === null
                                    ? this.shadowRoot.querySelector("ew-filled-text-field[name=ssid]").value
                                    : this._selectedSsid;
                                password = ((_b = this.shadowRoot.querySelector("ew-filled-text-field[name=password]")) === null || _b === void 0 ? void 0 : _b.value) || "";
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 3, 4, 5]);
                                return [4 /*yield*/, this._client.provision(ssid, password, 30000)];
                            case 2:
                                _c.sent();
                                return [3 /*break*/, 5];
                            case 3:
                                err_4 = _c.sent();
                                return [2 /*return*/];
                            case 4:
                                this._busy = false;
                                this._provisionForce = false;
                                return [7 /*endfinally*/];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            };
            EwtInstallDialog.prototype._closeDialog = function () {
                this.shadowRoot.querySelector("ew-dialog").close();
            };
            EwtInstallDialog.prototype._handleClose = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!this._client) return [3 /*break*/, 2];
                                return [4 /*yield*/, this._closeClientWithoutEvents(this._client)];
                            case 1:
                                _b.sent();
                                _b.label = 2;
                            case 2:
                                (0, fire_event_1.fireEvent)(this, "closed");
                                document.body.style.overflow = this._bodyOverflow;
                                this.parentNode.removeChild(this);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            Object.defineProperty(EwtInstallDialog.prototype, "_isSameFirmware", {
                /**
                 * Return if the device runs same firmware as manifest.
                 */
                get: function () {
                    var _b;
                    return !this._info
                        ? false
                        : ((_b = this.overrides) === null || _b === void 0 ? void 0 : _b.checkSameFirmware)
                            ? this.overrides.checkSameFirmware(this._manifest, this._info)
                            : this._info.firmware === this._manifest.name;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(EwtInstallDialog.prototype, "_isSameVersion", {
                /**
                 * Return if the device runs same firmware and version as manifest.
                 */
                get: function () {
                    return (this._isSameFirmware && this._info.version === this._manifest.version);
                },
                enumerable: false,
                configurable: true
            });
            EwtInstallDialog.prototype._closeClientWithoutEvents = function (client) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                client.removeEventListener("disconnect", this._handleDisconnect);
                                return [4 /*yield*/, client.close()];
                            case 1:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            };
            EwtInstallDialog.prototype._preventDefault = function (ev) {
                ev.preventDefault();
            };
            return EwtInstallDialog;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            __client_decorators = [(0, decorators_js_1.state)()];
            __state_decorators = [(0, decorators_js_1.state)()];
            __installErase_decorators = [(0, decorators_js_1.state)()];
            __installConfirmed_decorators = [(0, decorators_js_1.state)()];
            __installState_decorators = [(0, decorators_js_1.state)()];
            __provisionForce_decorators = [(0, decorators_js_1.state)()];
            __error_decorators = [(0, decorators_js_1.state)()];
            __busy_decorators = [(0, decorators_js_1.state)()];
            __ssids_decorators = [(0, decorators_js_1.state)()];
            __selectedSsid_decorators = [(0, decorators_js_1.state)()];
            __esDecorate(null, null, __client_decorators, { kind: "field", name: "_client", static: false, private: false, access: { has: function (obj) { return "_client" in obj; }, get: function (obj) { return obj._client; }, set: function (obj, value) { obj._client = value; } }, metadata: _metadata }, __client_initializers, __client_extraInitializers);
            __esDecorate(null, null, __state_decorators, { kind: "field", name: "_state", static: false, private: false, access: { has: function (obj) { return "_state" in obj; }, get: function (obj) { return obj._state; }, set: function (obj, value) { obj._state = value; } }, metadata: _metadata }, __state_initializers, __state_extraInitializers);
            __esDecorate(null, null, __installErase_decorators, { kind: "field", name: "_installErase", static: false, private: false, access: { has: function (obj) { return "_installErase" in obj; }, get: function (obj) { return obj._installErase; }, set: function (obj, value) { obj._installErase = value; } }, metadata: _metadata }, __installErase_initializers, __installErase_extraInitializers);
            __esDecorate(null, null, __installConfirmed_decorators, { kind: "field", name: "_installConfirmed", static: false, private: false, access: { has: function (obj) { return "_installConfirmed" in obj; }, get: function (obj) { return obj._installConfirmed; }, set: function (obj, value) { obj._installConfirmed = value; } }, metadata: _metadata }, __installConfirmed_initializers, __installConfirmed_extraInitializers);
            __esDecorate(null, null, __installState_decorators, { kind: "field", name: "_installState", static: false, private: false, access: { has: function (obj) { return "_installState" in obj; }, get: function (obj) { return obj._installState; }, set: function (obj, value) { obj._installState = value; } }, metadata: _metadata }, __installState_initializers, __installState_extraInitializers);
            __esDecorate(null, null, __provisionForce_decorators, { kind: "field", name: "_provisionForce", static: false, private: false, access: { has: function (obj) { return "_provisionForce" in obj; }, get: function (obj) { return obj._provisionForce; }, set: function (obj, value) { obj._provisionForce = value; } }, metadata: _metadata }, __provisionForce_initializers, __provisionForce_extraInitializers);
            __esDecorate(null, null, __error_decorators, { kind: "field", name: "_error", static: false, private: false, access: { has: function (obj) { return "_error" in obj; }, get: function (obj) { return obj._error; }, set: function (obj, value) { obj._error = value; } }, metadata: _metadata }, __error_initializers, __error_extraInitializers);
            __esDecorate(null, null, __busy_decorators, { kind: "field", name: "_busy", static: false, private: false, access: { has: function (obj) { return "_busy" in obj; }, get: function (obj) { return obj._busy; }, set: function (obj, value) { obj._busy = value; } }, metadata: _metadata }, __busy_initializers, __busy_extraInitializers);
            __esDecorate(null, null, __ssids_decorators, { kind: "field", name: "_ssids", static: false, private: false, access: { has: function (obj) { return "_ssids" in obj; }, get: function (obj) { return obj._ssids; }, set: function (obj, value) { obj._ssids = value; } }, metadata: _metadata }, __ssids_initializers, __ssids_extraInitializers);
            __esDecorate(null, null, __selectedSsid_decorators, { kind: "field", name: "_selectedSsid", static: false, private: false, access: { has: function (obj) { return "_selectedSsid" in obj; }, get: function (obj) { return obj._selectedSsid; }, set: function (obj, value) { obj._selectedSsid = value; } }, metadata: _metadata }, __selectedSsid_initializers, __selectedSsid_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a.styles = [
            styles_1.dialogStyles,
            (0, lit_1.css)(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n      :host {\n        --mdc-dialog-max-width: 390px;\n      }\n      div[slot=\"headline\"] {\n        padding-right: 48px;\n      }\n      ew-icon-button[slot=\"headline\"] {\n        position: absolute;\n        right: 4px;\n        top: 8px;\n      }\n      ew-icon-button[slot=\"headline\"] svg {\n        padding: 8px;\n        color: var(--text-color);\n      }\n      .dialog-nav svg {\n        color: var(--text-color);\n      }\n      .table-row {\n        display: flex;\n      }\n      .table-row.last {\n        margin-bottom: 16px;\n      }\n      .table-row svg {\n        width: 20px;\n        margin-right: 8px;\n      }\n      ew-filled-text-field,\n      ew-filled-select {\n        display: block;\n        margin-top: 16px;\n      }\n      label.formfield {\n        display: inline-flex;\n        align-items: center;\n        padding-right: 8px;\n      }\n      ew-list {\n        margin: 0 -24px;\n        padding: 0;\n      }\n      ew-list-item svg {\n        height: 24px;\n      }\n      ewt-page-message + ew-list {\n        padding-top: 16px;\n      }\n      .fake-icon {\n        width: 24px;\n      }\n      .error {\n        color: var(--danger-color);\n      }\n      .danger {\n        --mdc-theme-primary: var(--danger-color);\n        --mdc-theme-secondary: var(--danger-color);\n        --md-sys-color-primary: var(--danger-color);\n        --md-sys-color-on-surface: var(--danger-color);\n      }\n      button.link {\n        background: none;\n        color: inherit;\n        border: none;\n        padding: 0;\n        font: inherit;\n        text-align: left;\n        text-decoration: underline;\n        cursor: pointer;\n      }\n      :host([state=\"LOGS\"]) ew-dialog {\n        max-width: 90vw;\n        max-height: 90vh;\n      }\n      ewt-console {\n        width: calc(80vw - 48px);\n        height: calc(90vh - 168px);\n      }\n    "], ["\n      :host {\n        --mdc-dialog-max-width: 390px;\n      }\n      div[slot=\"headline\"] {\n        padding-right: 48px;\n      }\n      ew-icon-button[slot=\"headline\"] {\n        position: absolute;\n        right: 4px;\n        top: 8px;\n      }\n      ew-icon-button[slot=\"headline\"] svg {\n        padding: 8px;\n        color: var(--text-color);\n      }\n      .dialog-nav svg {\n        color: var(--text-color);\n      }\n      .table-row {\n        display: flex;\n      }\n      .table-row.last {\n        margin-bottom: 16px;\n      }\n      .table-row svg {\n        width: 20px;\n        margin-right: 8px;\n      }\n      ew-filled-text-field,\n      ew-filled-select {\n        display: block;\n        margin-top: 16px;\n      }\n      label.formfield {\n        display: inline-flex;\n        align-items: center;\n        padding-right: 8px;\n      }\n      ew-list {\n        margin: 0 -24px;\n        padding: 0;\n      }\n      ew-list-item svg {\n        height: 24px;\n      }\n      ewt-page-message + ew-list {\n        padding-top: 16px;\n      }\n      .fake-icon {\n        width: 24px;\n      }\n      .error {\n        color: var(--danger-color);\n      }\n      .danger {\n        --mdc-theme-primary: var(--danger-color);\n        --mdc-theme-secondary: var(--danger-color);\n        --md-sys-color-primary: var(--danger-color);\n        --md-sys-color-on-surface: var(--danger-color);\n      }\n      button.link {\n        background: none;\n        color: inherit;\n        border: none;\n        padding: 0;\n        font: inherit;\n        text-align: left;\n        text-decoration: underline;\n        cursor: pointer;\n      }\n      :host([state=\"LOGS\"]) ew-dialog {\n        max-width: 90vw;\n        max-height: 90vh;\n      }\n      ewt-console {\n        width: calc(80vw - 48px);\n        height: calc(90vh - 168px);\n      }\n    "]))),
        ],
        _a;
}();
exports.EwtInstallDialog = EwtInstallDialog;
customElements.define("ewt-install-dialog", EwtInstallDialog);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35;
