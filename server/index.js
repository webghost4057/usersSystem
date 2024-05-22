import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to enable CORS
app.use(cors());

// In-memory storage for users
const users = [{}];
app.get('/api/users', (req, res) => {
    res.json(users); // Ensures response is JSON
});



app.post('/api/users', (req, res) => {
    const data = req.body;
    const newUser = { ...data, id: uuid() };
    users.push(newUser);
    res.status(201).json(newUser); 
});

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users[index] = { ...users[index], ...data };
        res.json(users[index]); // Ensures response is JSON
    } else {
        res.status(404).json({ message: 'User not found' }); // Ensures response is JSON
    }
});

// Route to delete a user by ID
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        res.json(deletedUser[0]); // Ensures response is JSON
    } else {
        res.status(404).json({ message: 'User not found' }); // Ensures response is JSON
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
