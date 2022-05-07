'use strict'

const chai = require('chai')
const expect = chai.expect
const main = require('../src/main')
const isRewardClient = main.isRewardClient

describe('isRewardClient test', function () {
  it('should return false', function () {
    expect(isRewardClient("Regular")).to.equal(false);
  });
  it('should return false', function () {
    expect(isRewardClient("regular")).to.equal(false);
  });
  it('should return true', function () {
    expect(isRewardClient("Rewards")).to.equal(true);
  });
  it('should return false', function () {
    expect(isRewardClient("rewards")).to.equal(false);
  });
})