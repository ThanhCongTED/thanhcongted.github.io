"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOperatingSystem = void 0;
// From https://stackoverflow.com/a/38241481
var getOperatingSystem = function () {
    var _a, _b;
    var userAgent = window.navigator.userAgent;
    var platform = 
    // @ts-expect-error
    ((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgentData) === null || _b === void 0 ? void 0 : _b.platform) || window.navigator.platform;
    var macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    var windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    var iosPlatforms = ["iPhone", "iPad", "iPod"];
    if (macosPlatforms.indexOf(platform) !== -1) {
        return "Mac OS";
    }
    else if (iosPlatforms.indexOf(platform) !== -1) {
        return "iOS";
    }
    else if (windowsPlatforms.indexOf(platform) !== -1) {
        return "Windows";
    }
    else if (/Android/.test(userAgent)) {
        return "Android";
    }
    else if (/Linux/.test(platform)) {
        return "Linux";
    }
    return null;
};
exports.getOperatingSystem = getOperatingSystem;
