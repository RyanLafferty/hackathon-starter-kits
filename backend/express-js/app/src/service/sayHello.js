const ServiceBase = require('./base');

class SayHello extends ServiceBase {
  _name;

  constructor(name) {
    super();

    this._name = name;
  }

  call = () => {
    return `Hello ${this._name}!`;
  }
}

module.exports = SayHello;
