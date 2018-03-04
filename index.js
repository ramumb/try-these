'use strict';

/**
 * This is a port of the PrototypeJS method Try.these. It provides a simple
 * idiom for trying out blocks of code in sequence. Such a sequence of attempts
 * usually represents a downgrading approach to obtaining a given feature.
 * @param {function}  A function that might throw an error
 * @return {any} The result of a function or a default value
 */

function tryThese() {
    var result;
    
    for (var i = 0, length = arguments.length; i < length; i++) {
        var lambda = arguments[i];
        try {
            result = lambda();
            break;
        } catch (e) { }
    }
    
    return result;
}

module.exports = tryThese;
