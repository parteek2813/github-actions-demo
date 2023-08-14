const {expect} = require("chai");
const {JSDOM} = require("jsdom")

describe('Website', () => {
    it('should have a header element', () => {
      const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><header></header></body></html>');
      const header = dom.window.document.querySelector('header');
      expect(header).to.exist;
    });
  });