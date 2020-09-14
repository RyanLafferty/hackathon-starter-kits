import BaseService from 'src/service/base';

class SayHello extends BaseService {
  private _name: string;

  constructor(hello: HelloInterface) {
    super();

    this._name = hello.name;
  }

  call = (): string => {
    return `Hello ${this._name}!`;
  }
}

export default SayHello;
