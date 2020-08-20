// https://github.com/HarryStevens/d3-arrow#readme Version 0.0.16. Copyright 2020 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.d3 = global.d3 || {}));
}(this, (function (exports) { 'use strict';

  function iterate(attrs, path) {
    var keys = Object.keys(attrs),
        l = keys.length;

    for (var i = 0; i < l; i++) {
      var key = keys[i];
      path.attr(key, attrs[key]);
    }
  }

  function draw(context, attrs, id, scale, refX, refY, d) {
    var defs = context.select("defs");

    if (defs.empty()) {
      defs = context.append("defs");
    }

    var path = defs.append("marker").attr("id", id).attr("refX", refX * scale).attr("refY", refY * scale).attr("markerWidth", refX + 2 * scale).attr("markerHeight", refY * 2 * scale).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto-start-reverse").append("path").attr("d", d);
    iterate(attrs, path);
  }

  function arrow1() {
    var attrs = {
      fill: "black"
    };
    var id = "d3-arrow-1";
    var scale = 1;

    function arrow(context) {
      draw(context, attrs, id, scale, 14, 9, "M 1 1 Q ".concat(8 * scale, " ").concat(6 * scale, " ").concat(16 * scale, " ").concat(9 * scale, " Q ").concat(8 * scale, " ").concat(12 * scale, " 1 ").concat(17 * scale, " L ").concat(4 * scale, " ").concat(9 * scale, " Z"));
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow5() {
    var attrs = {
      fill: "black"
    };
    var id = "d3-arrow-5";
    var scale = 1;

    function arrow(context) {
      draw(context, attrs, id, scale, 14, 8, "M 1 1 L ".concat(16 * scale, " ").concat(8 * scale, " L 1 ").concat(15 * scale, " L ").concat(3.5 * scale, " ").concat(8 * scale, " z"));
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow10() {
    var attrs = {
      fill: "none",
      stroke: "black",
      "stroke-width": 1
    };
    var id = "d3-arrow-10";
    var scale = 1;

    function arrow(context) {
      draw(context, attrs, id, scale, 5, 4.5, "M 1 1 L ".concat(5 * scale, " ").concat(4.5 * scale, " L 1 ").concat(8 * scale));
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow11() {
    var attrs = {
      fill: "none",
      stroke: "black",
      "stroke-width": 1
    };
    var id = "d3-arrow-10";
    var scale = 1;

    function arrow(context) {
      draw(context, attrs, id, scale, 8, 8, "M 1 1 L ".concat(8 * scale, " ").concat(8 * scale, " L 1 ").concat(15 * scale));
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow13() {
    var attrs = {
      fill: "none",
      stroke: "black",
      "stroke-width": 1
    };
    var id = "d3-arrow-10";
    var scale = 1;

    function arrow(context) {
      draw(context, attrs, id, scale, 13, 10, "M 1 1 L ".concat(13 * scale, " ").concat(10 * scale, " L 1 ").concat(19 * scale));
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  exports.arrow1 = arrow1;
  exports.arrow10 = arrow10;
  exports.arrow11 = arrow11;
  exports.arrow13 = arrow13;
  exports.arrow5 = arrow5;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
