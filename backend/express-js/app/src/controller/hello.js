const SayHello = require('./../service/sayHello');

const HelloWorld = (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ data: { message: new SayHello('World').call() } }));
};

module.exports = {
  HelloWorld,
};
