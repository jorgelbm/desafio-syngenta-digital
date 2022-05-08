'use strict'

const chai = require('chai')
const expect = chai.expect
const main = require('../src/main')
let Hotel = main.Hotel;

const findCheapestHotel = main.findCheapestHotel

const lakewoodHotel = new Hotel("Lakewood", "3", 110.0, 80.0, 90.0, 80.0,);
const bridgewoodHotel = new Hotel("Bridgewood", "4", 160.0, 110.0, 60.0, 50.0);
const ridgewoodHotel = new Hotel("Ridgewood", "5", 220.0, 100.0, 150.0, 40.0);
const hotelArray = [lakewoodHotel, bridgewoodHotel, ridgewoodHotel]

describe('findCheapestHotel test', function () {
  it('week day regular client should return Lakewood', function () {
    expect(findCheapestHotel(lakewoodHotel, hotelArray, "week", "regular" )).to.equal(lakewoodHotel);
  });
  it('week day reward client should return Lakewood', function () {
    expect(findCheapestHotel(lakewoodHotel, hotelArray, "week", "reward" )).to.equal(lakewoodHotel);
  });
  it('weekend day regular client should return Bridgewood', function () {
    expect(findCheapestHotel(lakewoodHotel, hotelArray, "weekend", "regular" )).to.equal(bridgewoodHotel);
  });
  it('weekend day reward client should return Ridgewood', function () {
    expect(findCheapestHotel(lakewoodHotel, hotelArray, "weekend", "reward" )).to.equal(ridgewoodHotel);
  });
})