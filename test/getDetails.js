/* eslint-disable no-undef */
var expect = require('chai').expect

describe('getDetails', function() {
    var getDetails = require('../lib/getDetails')

    describe('address', function() {
        it('getDetails.address()', function() {
            expect(getDetails.Address()).to.equal('')
        })
    })

    describe('phone', function() {
        it('getDetails.phone()', function() {
            expect(getDetails.phone()).to.equal('')
        })
    })
})
