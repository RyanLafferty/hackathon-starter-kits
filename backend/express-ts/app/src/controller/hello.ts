import express from 'express';
import SayHello from 'src/service/sayHello';

export const HelloWorld = (_req: express.Request, res: express.Response): void => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ data: { message: new SayHello({ name: 'World' }).call() } }));
};
