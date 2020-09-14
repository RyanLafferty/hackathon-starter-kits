import BaseService from 'src/service/base';

class MockService extends BaseService {}
class MockServiceWithCall extends BaseService {
  call = () => {
    return 1;
  }
}

describe('Base Service', () => {
  let service;

  describe('when call is not overridden', () => {
    beforeEach(() => {
      service = new MockService();
    });

    it('throws error', () => {
      expect(() => { service.call() }).toThrow('Call not implemented');
    });
  });

  describe('when call is overridden', () => {
    beforeEach(() => {
      service = new MockServiceWithCall();
    });

    it('does not throw error', () => {
      expect(() => { service.call() }).not.toThrow('Call not implemented');
    });
  });
});
