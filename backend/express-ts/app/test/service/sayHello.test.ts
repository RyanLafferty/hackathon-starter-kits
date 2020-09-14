import SayHello from 'src/service/sayHello';

describe('SayHello Service', () => {
  describe('#call', () => {
    const name = 'World';
    let service;

    beforeEach(() => {
      service = new SayHello({ name });
    });

    it('returns Hello World!', () => {
      expect(service.call()).toBe('Hello World!');
    });
  });
});
