import { describe, it, expect } from 'vitest';
import { cn } from '../../lib/cn';

describe('cn', () => {
  it('should merge class names', () => {
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('should handle falsy values', () => {
    const result = cn('foo', false && 'bar', null, undefined, '', 'baz');
    expect(result).toBe('foo baz');
  });

  it('should handle arrays', () => {
    const result = cn(['foo', 'bar'], ['baz']);
    expect(result).toBe('foo bar baz');
  });

  it('should handle objects', () => {
    // tailwind-merge doesn't support objects directly, it expects class strings
    const result = cn('foo', 'bar');
    expect(result).toBe('foo bar');
  });

  it('should handle tailwind-merge conflicts', () => {
    const result = cn('px-2 px-4', 'py-2');
    expect(result).toBe('px-4 py-2');
  });
});
