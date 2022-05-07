'use strict'

const chai = require('chai')
const expect = chai.expect
const main = require('../src/main')
const getDayFromDateString = main.getDayFromDateString

describe('getDayFromDateString test', function () {
  it('"16Mar2009(mon)" should return mon', function () {
    expect(getDayFromDateString("16Mar2009(mon)")).to.equal("mon");
  });
  it('"17Mar2009(tues)" should return tues', function () {
    expect(getDayFromDateString("17Mar2009(tues)")).to.equal("tues");
  });
  it('"18Mar2009(wed)" should return wed', function () {
    expect(getDayFromDateString("18Mar2009(wed)")).to.equal("wed");
  });
  it('"26Mar2009(thur)" should return thur', function () {
    expect(getDayFromDateString("26Mar2009(thur)")).to.equal("thur");
  });
  it('"20Mar2009(fri)" should return fri', function () {
    expect(getDayFromDateString("20Mar2009(fri)")).to.equal("fri");
  });
  it('"27Mar2009(fri)" should return fri', function () {
    expect(getDayFromDateString("27Mar2009(fri)")).to.equal("fri");
  });
  it('"21Mar2009(sat)" should return sat', function () {
    expect(getDayFromDateString("21Mar2009(sat)")).to.equal("sat");
  });
  it('"28Mar2009(sat)" should return sat', function () {
    expect(getDayFromDateString("28Mar2009(sat)")).to.equal("sat");
  });
  it('"22Mar2009(sun)" should return sun', function () {
    expect(getDayFromDateString("22Mar2009(sun)")).to.equal("sun");
  });
  
})