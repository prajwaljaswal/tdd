import { describe, expect, it } from 'vitest';

import { add } from './stringCalculator';

describe('string calculator add', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number when a single value is provided', () => {
    expect(add('7')).toBe(7);
  });

  it('sums comma separated numbers', () => {
    expect(add('1,2,3')).toBe(6);
  });

  it('handles newline delimiters in addition to commas', () => {
    expect(add('4\n5,6')).toBe(15);
  });

  it('trims whitespace around numbers', () => {
    expect(add(' 8 , 9 ')).toBe(17);
  });

  it('treats trailing delimiters as zero values', () => {
    expect(add('10,2,')).toBe(12);
  });

  it('throws when a token is not a number', () => {
    expect(() => add('3,NaN')).toThrow('Invalid number: NaN');
  });
});

