const fractal = require('@frctl/fractal');
const {expect} = require('../../../test/helpers');
const Renderer = require('./src/renderer');
const factory = require('.');

describe('Renderer', () => {
  describe('main export', () => {
    it('exports a factory function that instantiates a Renderer instance', () => {
      expect(factory(fractal())).to.be.instanceOf(Renderer);
    });

    it('provides a reference to the Renderer class', () => {
      expect(factory.Renderer).to.equal(Renderer);
    });
  });
});
