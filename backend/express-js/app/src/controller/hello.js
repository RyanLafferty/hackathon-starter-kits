const HelloWorld = (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ data: { message: 'Hello World!' } }));
};

module.exports = {
  HelloWorld,
};
