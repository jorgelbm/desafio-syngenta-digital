'use strict'

const chai = require('chai')
const expect = chai.expect
const main = require('../src/main')
const isWeekend = main.isWeekend

describe('isWeekend test', function () {
  it('"mon" should return false', function () {
    expect(isWeekend("mon")).to.equal(false);
  });
  it('"tues" should return false', function () {
    expect(isWeekend("tues")).to.equal(false);
  });
  it('"wed" should return false', function () {
    expect(isWeekend("wed")).to.equal(false);
  });
  it('"thur" should return false', function () {
    expect(isWeekend("thur")).to.equal(false);
  });
  it('"fri" should return false', function () {
    expect(isWeekend("fri")).to.equal(false);
  });
  it('"sat" should return true', function () {
    expect(isWeekend("sat")).to.equal(true);
  });
  it('"sun "should return true', function () {
    expect(isWeekend("sun")).to.equal(true);
  });
})