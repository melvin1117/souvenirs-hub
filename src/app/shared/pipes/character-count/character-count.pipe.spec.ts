import { CharacterCountPipe } from './character-count.pipe';

describe('CharacterCountPipe (Count the character remaining of a text)', () => {
  let pipe: CharacterCountPipe;
  const text = 'Hello! I am a sample text for testing.';

  beforeEach(() => {
    pipe = new CharacterCountPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a correct remaining character length using default max length', () => {
    expect(pipe.transform(text)).toBe(462);
  });

  it('should return a correct remaining character length using given max length (200)', () => {
    expect(pipe.transform(text, 200)).toBe(162);
  });

  it('should return a correct remaining character when the value is null & max length (200)', () => {
    expect(pipe.transform(null, 200)).toBe(200);
  });

  it('should return a correct remaining character when the value is null & default max length', () => {
    expect(pipe.transform(null)).toBe(500);
  });
});
