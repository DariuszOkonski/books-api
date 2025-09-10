const { expect } = require('chai');
const formatFullname = require('../formatFullname');

describe('formatFullName', () => {
  it('should return Error if fullName not string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname(true)).to.equal('Error');
    expect(formatFullname(false)).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
  });

  it('should return Error if not fullName is provider', () => {
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname('john doe dear')).to.equal('Error');
  });

  it('should return false if no firstName or lastName', () => {
    expect(formatFullname('john')).to.equal(false);
  });

  it('should return proper name if firstName and lastName provided', () => {
    expect(formatFullname('JoHN DOe')).to.equal('JohnDoe');
  });
});
