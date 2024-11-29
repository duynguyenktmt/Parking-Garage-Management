// index.ts
import 'reflect-metadata';
import express from 'express';
import { initializeDatabase } from './infrastructure/in-mem-db';

import { DataSource } from 'typeorm';
import bodyParser from 'body-parser';

const app = express();

const startServer = async () => {
    await initializeDatabase();
    
    // Set up your routes and middleware here

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

//const PORT = 3388;

//app.use(bodyParser.json());

// Create a new DataSource instance using SQLite
// const AppDataSource = new DataSource({
//     type: 'sqlite', // Use 'sqlite' instead of 'h2'
//     database: 'test.db', // SQLite database file
//     synchronize: true, // Set to true for development; false for production
//     entities: [Name],
// });
// Connect to the database
// AppDataSource.initialize().then(connection => {
//     const nameRepository = connection.getRepository(Name);

//     // Endpoint to get all names
//     app.get('/api/names', async (req, res) => {
//         try {
//             const names = await nameRepository.find();
//             res.json(names);
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to fetch names' });
//         }
//     });

//     // Endpoint to add a new name
//     app.post('/api/names', async (req, res) => {
//         const { name } = req.body;
//         try {
//             const newName = nameRepository.create({ name });
//             await nameRepository.save(newName);
//             res.status(201).json(newName);
//         } catch (error) {
//             res.status(500).json({ error: 'Failed to add name' });
//         }
//     });

//     app.listen(PORT, () => {
//         console.log(`Server is running on http://localhost:${PORT}`);
//     });
// }).catch(error => console.log('Database connection error:', error));