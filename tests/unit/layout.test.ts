import { describe, it, expect } from 'vitest';
import { gitConfig, baseOptions } from '../../lib/layout.shared';

describe('layout.shared', () => {
  describe('gitConfig', () => {
    it('should have required properties', () => {
      expect(gitConfig).toHaveProperty('user');
      expect(gitConfig).toHaveProperty('repo');
      expect(gitConfig).toHaveProperty('branch');
    });

    it('should have string values', () => {
      expect(typeof gitConfig.user).toBe('string');
      expect(typeof gitConfig.repo).toBe('string');
      expect(typeof gitConfig.branch).toBe('string');
    });
  });

  describe('baseOptions', () => {
    it('should return base layout options', () => {
      const options = baseOptions();

      expect(options).toHaveProperty('nav');
      expect(options).toHaveProperty('githubUrl');
    });

    it('should generate correct github URL', () => {
      const options = baseOptions();
      const expectedUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

      expect(options.githubUrl).toBe(expectedUrl);
    });

    it('should have nav with title', () => {
      const options = baseOptions();

      expect(options.nav).toHaveProperty('title');
      expect(typeof options.nav.title).toBe('string');
    });
  });
});
