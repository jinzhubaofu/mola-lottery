(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.util = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    exports.__esModule = true;
    exports.abortablePromise = abortablePromise;
    /**
     * @file util
     * @author leon <ludafa@outlook.com>
     */

    function abortablePromise(promise) {

        var abortFn = null;

        var abortPromise = new Promise(function (resolve, reject) {
            abortFn = function abortFn() {
                reject('timeout');
            };
        });

        var abortablePromise = Promise.race([promise, abortPromise]);

        abortablePromise.abort = abortFn;

        return abortablePromise;
    }
});
//# sourceMappingURL=util.js.map
