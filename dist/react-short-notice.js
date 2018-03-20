(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "src/ShortNoticeContainer", "src/ShortNoticeContraller"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require("src/ShortNoticeContainer"), require("src/ShortNoticeContraller"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.ShortNoticeContainer, global.ShortNoticeContraller);
    global.index = mod.exports;
  }
})(this, function (module, ShortNoticeContainer, ShortNoticeContraller) {
  "use strict";

  module.exports = { ShortNoticeContainer: ShortNoticeContainer, ShortNoticeContraller: ShortNoticeContraller };
});
