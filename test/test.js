'use strict';

var expect = require('chai').expect;
var tryThese = require('../index');

describe('#tryThese', function() {
    it('should return 1', function() {
        var result = tryThese(
            function() { return 1; }
        );
        expect(result).to.equal(1);
    });

    it('should return 0', function() {
        var result = tryThese(
            function() { return 0; }
        );
        expect(result).to.equal(0);
    });

    it('should return true', function() {
        var result = tryThese(
            function() { return true; }
        );
        expect(result).to.equal(true);
    });

    it('should return false', function() {
        var result = tryThese(
            function() { return false; }
        );
        expect(result).to.equal(false);
    });

    it('should return null', function() {
        var result = tryThese(
            function() { return null; }
        );
        expect(result).to.equal(null);
    });

    it('should return undefined', function() {
        var result = tryThese(
            function() { return undefined; }
        );
        expect(result).to.equal(undefined);
    });

    it('should return A', function() {
        var result = tryThese(
            function() { return null; }
        ) || 'A';
        expect(result).to.equal('A');
    });

    it('should return Z', function() {
        var result = tryThese(
            function() { return null; },
            function() { return undefined; }
        ) || 'Z';
        expect(result).to.equal('Z');
    });

    it('should return kyle', function() {
        var result = tryThese(
            function() { return window; },
            function() { return 'kyle'; },
            function() { return document; }
        ) || false;
        expect(result).to.equal('kyle');
    });

    it('should return alexis', function() {
        var result = tryThese(
            function() { return this; },
            function() { return window; },
            function() { return document; }
        ) || 'alexis';
        expect(result).to.equal('alexis');
    });
});
