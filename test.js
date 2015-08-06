'use strong';

const test = require('tape');

const spec = 'should be equivalent of the expected value.';
const expected = ['id', 'xml:base', 'xml:lang', 'xml:space'];

test('require(\'svg-core-attrs\')', t => {
  t.plan(1);
  t.deepEqual(require('./'), expected, spec);
});

test('window.svgCoreAttrs', t => {
  t.plan(1);

  global.window = {};
  require('./' + require('./bower.json').main);
  t.deepEqual(global.window.svgCoreAttrs, expected, spec);
});
