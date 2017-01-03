(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'mola'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('mola'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mola);
    global.constants = mod.exports;
  }
})(this, function (exports, _mola) {
  'use strict';

  exports.__esModule = true;
  exports.level = exports.type = undefined;
  var type = exports.type = 'lottery'; /**
                                        * @file constants
                                        * @author leon <ludafa@outlook.com>
                                        */

  var level = exports.level = _mola.MOLA_COMPONENT_LEVEL_CONTAINER;
});
//# sourceMappingURL=constants.js.map
