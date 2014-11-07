/*!
 * svg-core-attrs | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/svg-core-attrs
*/
'use strict';

var test = require('tape');

var spec = 'should be equivalent of the expected value.';
var expected = ['id', 'xml:base', 'xml:lang', 'xml:space'];

test('require(\'svg-core-attrs\')', function(t) {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.svgCoreAttrs', function(t) {
  t.plan(1);

  global.window = {};
  require(require('./bower.json').main);
  t.deepEqual(window.svgCoreAttrs, expected, spec);
});
