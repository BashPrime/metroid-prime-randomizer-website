import * as express from 'express';
import * as knex from 'knex';
import * as http from 'http';

import * as config from './config.json';
import { getMainController } from './controllers/mainController';

// Initialize express
const app = express();

const connection = knex({
  client: 'pg',
  connection: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.database
  }
});

// API location (all node routes will fall under /api path)
app.use('/api', getMainController());

const port = config.server.port;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`metroid-prime-randomizer server running on localhost:${port}`);
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
process.on('SIGUSR2', shutDown); // nodemon restart

let connections = [];

server.on('connection', connection => {
  connections.push(connection);
  connection.on('close', () => connections = connections.filter(curr => curr !== connection));
});

function shutDown() {
  console.log('Received kill signal, shutting down');

  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);

  connections.forEach(curr => curr.end());
  setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
}