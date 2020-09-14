import express from 'express';
import { HelloWorld } from 'src/controller/hello';

const HelloRouter = express.Router();

HelloRouter.get('/', HelloWorld);

export default HelloRouter; 
