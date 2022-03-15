import express from 'express';
import { createServer } from 'http';
import path from 'path';
import "./database";
import { routes } from './routes';

const app = express();

const http = createServer(app);

app.use(express.json());

app.use(routes);

export { http }