import express from 'express'
import bodyParser from 'body-parser';
import knex from 'knex';
import sqlite from 'sqlite3';
import Sequelize from 'sequelize';
import Kconfig from './knexfile';

knex(Kconfig.development);

const server = express();

server.use(bodyParser.json());

// endpoints here

server.get('/zoos', (req, res) => {
	const zoos = knex('zoos')
		.then(zoos => {
			res.status(200).json(zoos);
		})
		.catch(err => console.log(err));
});

server.post('/zoos', (req, res) => {
	const { zoo } = req.body;
	knex.insert(zoo).into('zoos')
		.then(zoos => {
			res.status(200).json(zoos);
		})
		.catch(err => console.log(err));
});

server.post('/zoos/:id', (req, res) => {
	const id = req.params.id;
	const zoos = knex('zoos')
		.where('id', id)
		.then(zoo => {
			res.status(200).json(zoos);
		});
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});
