import { MessageProvider } from './MessageProvider';

describe('MessageProvider', () => {
  it('constructs instance', () => {
    const provider = new MessageProvider('Me');
    expect(provider).toBeDefined();
  });

  describe('#get', () => {
    it('returns message', () => {
      const provider = new MessageProvider('Prokop Simek');
      expect(provider.get()).toEqual(
        'hello Prokop Simek from ./src/Message.ts',
      );
    });
  });
});
