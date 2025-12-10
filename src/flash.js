"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.flash = void 0;
var esptool_js_1 = require("esptool-js");
var reset_1 = require("./util/reset");
var flash = function (onEvent, port, manifestPath, manifest, eraseFirst) { return __awaiter(void 0, void 0, void 0, function () {
    var build, chipFamily, fireStateEvent, transport, esploader, err_1, manifestURL, filePromises, fileArray, totalSize, part, data, err_2, totalWritten, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fireStateEvent = function (stateUpdate) {
                    return onEvent(__assign(__assign({}, stateUpdate), { manifest: manifest, build: build, chipFamily: chipFamily }));
                };
                transport = new esptool_js_1.Transport(port);
                esploader = new esptool_js_1.ESPLoader({
                    transport: transport,
                    baudrate: 115200,
                    romBaudrate: 115200,
                    enableTracing: false,
                });
                // For debugging
                window.esploader = esploader;
                fireStateEvent({
                    state: "initializing" /* FlashStateType.INITIALIZING */,
                    message: "Initializing...",
                    details: { done: false },
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 7]);
                return [4 /*yield*/, esploader.main()];
            case 2:
                _a.sent();
                return [4 /*yield*/, esploader.flashId()];
            case 3:
                _a.sent();
                return [3 /*break*/, 7];
            case 4:
                err_1 = _a.sent();
                console.error(err_1);
                fireStateEvent({
                    state: "error" /* FlashStateType.ERROR */,
                    message: "Failed to initialize. Try resetting your device or holding the BOOT button while clicking INSTALL.",
                    details: { error: "failed_initialize" /* FlashError.FAILED_INITIALIZING */, details: err_1 },
                });
                return [4 /*yield*/, (0, reset_1.hardReset)(transport)];
            case 5:
                _a.sent();
                return [4 /*yield*/, transport.disconnect()];
            case 6:
                _a.sent();
                return [2 /*return*/];
            case 7:
                chipFamily = esploader.chip.CHIP_NAME;
                fireStateEvent({
                    state: "initializing" /* FlashStateType.INITIALIZING */,
                    message: "Initialized. Found ".concat(chipFamily),
                    details: { done: true },
                });
                build = manifest.builds.find(function (b) { return b.chipFamily === chipFamily; });
                if (!!build) return [3 /*break*/, 10];
                fireStateEvent({
                    state: "error" /* FlashStateType.ERROR */,
                    message: "Your ".concat(chipFamily, " board is not supported."),
                    details: { error: "not_supported" /* FlashError.NOT_SUPPORTED */, details: chipFamily },
                });
                return [4 /*yield*/, (0, reset_1.hardReset)(transport)];
            case 8:
                _a.sent();
                return [4 /*yield*/, transport.disconnect()];
            case 9:
                _a.sent();
                return [2 /*return*/];
            case 10:
                fireStateEvent({
                    state: "preparing" /* FlashStateType.PREPARING */,
                    message: "Preparing installation...",
                    details: { done: false },
                });
                manifestURL = new URL(manifestPath, location.toString()).toString();
                filePromises = build.parts.map(function (part) { return __awaiter(void 0, void 0, void 0, function () {
                    var url, resp, reader, blob;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                url = new URL(part.path, manifestURL).toString();
                                return [4 /*yield*/, fetch(url)];
                            case 1:
                                resp = _a.sent();
                                if (!resp.ok) {
                                    throw new Error("Downlading firmware ".concat(part.path, " failed: ").concat(resp.status));
                                }
                                reader = new FileReader();
                                return [4 /*yield*/, resp.blob()];
                            case 2:
                                blob = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve) {
                                        reader.addEventListener("load", function () { return resolve(reader.result); });
                                        reader.readAsBinaryString(blob);
                                    })];
                        }
                    });
                }); });
                fileArray = [];
                totalSize = 0;
                part = 0;
                _a.label = 11;
            case 11:
                if (!(part < filePromises.length)) return [3 /*break*/, 18];
                _a.label = 12;
            case 12:
                _a.trys.push([12, 14, , 17]);
                return [4 /*yield*/, filePromises[part]];
            case 13:
                data = _a.sent();
                fileArray.push({ data: data, address: build.parts[part].offset });
                totalSize += data.length;
                return [3 /*break*/, 17];
            case 14:
                err_2 = _a.sent();
                fireStateEvent({
                    state: "error" /* FlashStateType.ERROR */,
                    message: err_2.message,
                    details: {
                        error: "failed_firmware_download" /* FlashError.FAILED_FIRMWARE_DOWNLOAD */,
                        details: err_2.message,
                    },
                });
                return [4 /*yield*/, (0, reset_1.hardReset)(transport)];
            case 15:
                _a.sent();
                return [4 /*yield*/, transport.disconnect()];
            case 16:
                _a.sent();
                return [2 /*return*/];
            case 17:
                part++;
                return [3 /*break*/, 11];
            case 18:
                fireStateEvent({
                    state: "preparing" /* FlashStateType.PREPARING */,
                    message: "Installation prepared",
                    details: { done: true },
                });
                if (!eraseFirst) return [3 /*break*/, 20];
                fireStateEvent({
                    state: "erasing" /* FlashStateType.ERASING */,
                    message: "Erasing device...",
                    details: { done: false },
                });
                return [4 /*yield*/, esploader.eraseFlash()];
            case 19:
                _a.sent();
                fireStateEvent({
                    state: "erasing" /* FlashStateType.ERASING */,
                    message: "Device erased",
                    details: { done: true },
                });
                _a.label = 20;
            case 20:
                fireStateEvent({
                    state: "writing" /* FlashStateType.WRITING */,
                    message: "Writing progress: 0%",
                    details: {
                        bytesTotal: totalSize,
                        bytesWritten: 0,
                        percentage: 0,
                    },
                });
                totalWritten = 0;
                _a.label = 21;
            case 21:
                _a.trys.push([21, 23, , 26]);
                return [4 /*yield*/, esploader.writeFlash({
                        fileArray: fileArray,
                        flashSize: "keep",
                        flashMode: "keep",
                        flashFreq: "keep",
                        eraseAll: false,
                        compress: true,
                        // report progress
                        reportProgress: function (fileIndex, written, total) {
                            var uncompressedWritten = (written / total) * fileArray[fileIndex].data.length;
                            var newPct = Math.floor(((totalWritten + uncompressedWritten) / totalSize) * 100);
                            // we're done with this file
                            if (written === total) {
                                totalWritten += uncompressedWritten;
                                return;
                            }
                            fireStateEvent({
                                state: "writing" /* FlashStateType.WRITING */,
                                message: "Writing progress: ".concat(newPct, "%"),
                                details: {
                                    bytesTotal: totalSize,
                                    bytesWritten: totalWritten + written,
                                    percentage: newPct,
                                },
                            });
                        },
                    })];
            case 22:
                _a.sent();
                return [3 /*break*/, 26];
            case 23:
                err_3 = _a.sent();
                fireStateEvent({
                    state: "error" /* FlashStateType.ERROR */,
                    message: err_3.message,
                    details: { error: "write_failed" /* FlashError.WRITE_FAILED */, details: err_3 },
                });
                return [4 /*yield*/, (0, reset_1.hardReset)(transport)];
            case 24:
                _a.sent();
                return [4 /*yield*/, transport.disconnect()];
            case 25:
                _a.sent();
                return [2 /*return*/];
            case 26:
                fireStateEvent({
                    state: "writing" /* FlashStateType.WRITING */,
                    message: "Writing complete",
                    details: {
                        bytesTotal: totalSize,
                        bytesWritten: totalWritten,
                        percentage: 100,
                    },
                });
                return [4 /*yield*/, (0, reset_1.hardReset)(transport)];
            case 27:
                _a.sent();
                console.log("DISCONNECT");
                return [4 /*yield*/, transport.disconnect()];
            case 28:
                _a.sent();
                fireStateEvent({
                    state: "finished" /* FlashStateType.FINISHED */,
                    message: "All done!",
                });
                return [2 /*return*/];
        }
    });
}); };
exports.flash = flash;
