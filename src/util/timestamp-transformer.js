"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampTransformer = void 0;
var TimestampTransformer = /** @class */ (function () {
    function TimestampTransformer() {
    }
    TimestampTransformer.prototype.transform = function (chunk, controller) {
        var date = new Date();
        var h = date.getHours().toString().padStart(2, "0");
        var m = date.getMinutes().toString().padStart(2, "0");
        var s = date.getSeconds().toString().padStart(2, "0");
        controller.enqueue("[".concat(h, ":").concat(m, ":").concat(s, "]").concat(chunk));
    };
    return TimestampTransformer;
}());
exports.TimestampTransformer = TimestampTransformer;
