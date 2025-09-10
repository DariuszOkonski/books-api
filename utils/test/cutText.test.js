const { expect } = require('chai');
const cutText = require('../cutText.js');

describe('CutText', () => {
  const TEXT = 'Lorem Ipsum';
  it('should return an error if content arg is not a string', () => {
    expect(cutText(undefined, 20)).to.equal('Error');
    expect(cutText(12, 20)).to.equal('Error');
    expect(cutText({}, 20)).to.equal('Error');
    expect(cutText([], 20)).to.equal('Error');
    expect(cutText(function () {}, 20)).to.equal('Error');
  });

  it('should return an error if content arg length is 0', () => {
    expect(cutText('', 20)).to.equal('Error');
  });

  it('should return an error if maxLength arg is not a number', () => {
    expect(cutText(TEXT, undefined)).to.equal('Error');
    expect(cutText(TEXT, 'abc')).to.equal('Error');
    expect(cutText('Lorem Ipsum', {})).to.equal('Error');
    expect(cutText('Lorem Ipsum', [])).to.equal('Error');
    expect(cutText('Lorem Ipsum', function () {})).to.equal('Error');
  });

  it('should return an error if maxLength is lower or equal 0', () => {
    expect(cutText(TEXT, 0)).to.equal('Error');
    expect(cutText(TEXT, -6)).to.equal('Error');
  });
});
