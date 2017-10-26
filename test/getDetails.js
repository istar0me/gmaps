/* eslint-disable no-undef */
var expect = require('chai').expect

describe('getDetails', function () {
    var getDetails = require('../lib/getDetails')

    describe('金門大學', function () {
        it("getDetails.address('highWall')).to.equal('金大')", function () {
            expect(getDetails.address('highWall')).to.equal('金大')
        })

        it("getDetails.phone('highWall')).to.equal('0987487987')", function () {
            expect(getDetails.phone('highWall')).to.equal('0987487987')
        })

        it("getDetails.open_hours('highWall')).to.equal('0~24')", function () {
            expect(getDetails.open_hours('highWall')).to.equal('0~24')
        })
    })
})