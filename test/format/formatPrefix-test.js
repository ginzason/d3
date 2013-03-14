var vows = require("vows"),
    load = require("../load"),
    assert = require("../env-assert");

var suite = vows.describe("d3.formatPrefix");

suite.addBatch({
  "formatPrefix": {
    topic: load("format/formatPrefix"),
    "determines the appropriate prefix for small numbers": function(d3) {
      assert.equal(d3.formatPrefix(0).symbol, "");
      assert.equal(d3.formatPrefix(1e-00).symbol, "");
      assert.equal(d3.formatPrefix(1e-01).symbol, "");
      assert.equal(d3.formatPrefix(1e-02).symbol, "");
      assert.equal(d3.formatPrefix(1e-03).symbol, "m");
      assert.equal(d3.formatPrefix(1e-04).symbol, "m");
      assert.equal(d3.formatPrefix(1e-05).symbol, "m");
      assert.equal(d3.formatPrefix(1e-06).symbol, "µ");
      assert.equal(d3.formatPrefix(1e-07).symbol, "µ");
      assert.equal(d3.formatPrefix(1e-08).symbol, "µ");
      assert.equal(d3.formatPrefix(1e-09).symbol, "n");
      assert.equal(d3.formatPrefix(1e-10).symbol, "n");
      assert.equal(d3.formatPrefix(1e-11).symbol, "n");
      assert.equal(d3.formatPrefix(1e-12).symbol, "p");
      assert.equal(d3.formatPrefix(1e-13).symbol, "p");
      assert.equal(d3.formatPrefix(1e-14).symbol, "p");
      assert.equal(d3.formatPrefix(1e-15).symbol, "f");
      assert.equal(d3.formatPrefix(1e-16).symbol, "f");
      assert.equal(d3.formatPrefix(1e-17).symbol, "f");
      assert.equal(d3.formatPrefix(1e-18).symbol, "a");
      assert.equal(d3.formatPrefix(1e-19).symbol, "a");
      assert.equal(d3.formatPrefix(1e-20).symbol, "a");
      assert.equal(d3.formatPrefix(1e-21).symbol, "z");
      assert.equal(d3.formatPrefix(1e-22).symbol, "z");
      assert.equal(d3.formatPrefix(1e-23).symbol, "z");
      assert.equal(d3.formatPrefix(1e-24).symbol, "y");
      assert.equal(d3.formatPrefix(1e-25).symbol, "y");
      assert.equal(d3.formatPrefix(1e-26).symbol, "y");
      assert.equal(d3.formatPrefix(1e-27).symbol, "y");
    },
    "determines the appropriate prefix for large numbers": function(d3) {
      assert.equal(d3.formatPrefix(0).symbol, "");
      assert.equal(d3.formatPrefix(1e00).symbol, "");
      assert.equal(d3.formatPrefix(1e01).symbol, "");
      assert.equal(d3.formatPrefix(1e02).symbol, "");
      assert.equal(d3.formatPrefix(1e03).symbol, "k");
      assert.equal(d3.formatPrefix(1e04).symbol, "k");
      assert.equal(d3.formatPrefix(1e05).symbol, "k");
      assert.equal(d3.formatPrefix(1e06).symbol, "M");
      assert.equal(d3.formatPrefix(1e07).symbol, "M");
      assert.equal(d3.formatPrefix(1e08).symbol, "M");
      assert.equal(d3.formatPrefix(1e09).symbol, "G");
      assert.equal(d3.formatPrefix(1e10).symbol, "G");
      assert.equal(d3.formatPrefix(1e11).symbol, "G");
      assert.equal(d3.formatPrefix(1e12).symbol, "T");
      assert.equal(d3.formatPrefix(1e13).symbol, "T");
      assert.equal(d3.formatPrefix(1e14).symbol, "T");
      assert.equal(d3.formatPrefix(1e15).symbol, "P");
      assert.equal(d3.formatPrefix(1e16).symbol, "P");
      assert.equal(d3.formatPrefix(1e17).symbol, "P");
      assert.equal(d3.formatPrefix(1e18).symbol, "E");
      assert.equal(d3.formatPrefix(1e19).symbol, "E");
      assert.equal(d3.formatPrefix(1e20).symbol, "E");
      assert.equal(d3.formatPrefix(1e21).symbol, "Z");
      assert.equal(d3.formatPrefix(1e22).symbol, "Z");
      assert.equal(d3.formatPrefix(1e23).symbol, "Z");
      assert.equal(d3.formatPrefix(1e24).symbol, "Y");
      assert.equal(d3.formatPrefix(1e25).symbol, "Y");
      assert.equal(d3.formatPrefix(1e26).symbol, "Y");
      assert.equal(d3.formatPrefix(1e27).symbol, "Y");
    },
    "determines the appropriate prefix for negative numbers": function(d3) {
      assert.equal(d3.formatPrefix(-0).symbol, "");
      assert.equal(d3.formatPrefix(-1e-00).symbol, "");
      assert.equal(d3.formatPrefix(-1e-03).symbol, "m");
      assert.equal(d3.formatPrefix(-1e-06).symbol, "µ");
      assert.equal(d3.formatPrefix(-1e-09).symbol, "n");
      assert.equal(d3.formatPrefix(-1e-12).symbol, "p");
      assert.equal(d3.formatPrefix(-1e-15).symbol, "f");
      assert.equal(d3.formatPrefix(-1e-18).symbol, "a");
      assert.equal(d3.formatPrefix(-1e-21).symbol, "z");
      assert.equal(d3.formatPrefix(-1e-24).symbol, "y");
      assert.equal(d3.formatPrefix(-1e-27).symbol, "y");
      assert.equal(d3.formatPrefix(-1e00).symbol, "");
      assert.equal(d3.formatPrefix(-1e03).symbol, "k");
      assert.equal(d3.formatPrefix(-1e06).symbol, "M");
      assert.equal(d3.formatPrefix(-1e09).symbol, "G");
      assert.equal(d3.formatPrefix(-1e12).symbol, "T");
      assert.equal(d3.formatPrefix(-1e15).symbol, "P");
      assert.equal(d3.formatPrefix(-1e18).symbol, "E");
      assert.equal(d3.formatPrefix(-1e21).symbol, "Z");
      assert.equal(d3.formatPrefix(-1e24).symbol, "Y");
      assert.equal(d3.formatPrefix(-1e27).symbol, "Y");
    },
    "considers the effect of rounding based on precision": function(d3) {
      assert.equal(d3.formatPrefix(999.5000000, 4).symbol, "");
      assert.equal(d3.formatPrefix(999.5000000, 3).symbol, "k");
      assert.equal(d3.formatPrefix(995.0000000, 3).symbol, "");
      assert.equal(d3.formatPrefix(995.0000000, 2).symbol, "k");
      assert.equal(d3.formatPrefix(950.0000000, 2).symbol, "");
      assert.equal(d3.formatPrefix(950.0000000, 1).symbol, "k");
      assert.equal(d3.formatPrefix(0.000009995, 4).symbol, "µ");
      assert.equal(d3.formatPrefix(0.000009995, 3).symbol, "m");
      assert.equal(d3.formatPrefix(0.000009950, 3).symbol, "µ");
      assert.equal(d3.formatPrefix(0.000009950, 2).symbol, "m");
      assert.equal(d3.formatPrefix(0.000009500, 2).symbol, "µ");
      assert.equal(d3.formatPrefix(0.000009500, 1).symbol, "m");
    }
  }
});

suite.export(module);