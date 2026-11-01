
const test = require('node:test');
const assert = require('node:assert/strict');

const { add } = require('./app');

// Test 1: Positive numbers
test('Addition of two positive numbers', () => {
    assert.equal(add(5, 3), 8);
});

// Test 2: Zero and negative number
test('Addition of zero and a negative number', () => {
    assert.equal(add(0, -5), -5);
});
