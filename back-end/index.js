require('dotenv').config();

const pool = require('./database');

async function checkDatabaseConnection() {
	try {
		const result = await pool.query('SELECT current_database() AS database');
		console.log(`Conectado ao PostgreSQL: ${result.rows[0].database}`);
	} catch (error) {
		const message = error.message.includes('client password must be a string')
			? 'Configure PGUSER e PGPASSWORD no arquivo back-end/.env.'
			: error.message;
		console.error('Não foi possível conectar ao PostgreSQL:', message);
		process.exitCode = 1;
	} finally {
		await pool.end();
	}
}

checkDatabaseConnection();
