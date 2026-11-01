
const test = require('node:test');
const assert = require('node:assert/strict');

const { add } = require('./app');

// Test Case 1: Addition of two positive numbers
test('Addition of two positive numbers', () => {
    assert.equal(add(5, 3), 10);
});

// Test Case 2: Addition of zero and a negative number
test('Addition of zero and a negative number', () => {
    assert.equal(add(0, -5), -5);
});
