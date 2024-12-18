// index.js (Express Backend)
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');  // Import the CORS middleware

const prisma = new PrismaClient();
const app = express();
const port = 5000;

// Enable CORS for all origins (this allows any frontend to access the API)
app.use(cors());

// Alternatively, if you want to restrict the CORS to only your Next.js frontend, you can pass options:
app.use(cors({
  origin: 'http://localhost:3000', // Change this to the URL of your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// GET: Get all Todos
app.get('/api/tasks', async (req, res) => {
  try {
    const todos = await prisma.task.findMany();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

// POST: Create a new Todo
app.post('/api/tasks', async (req, res) => {
  const { title, color, completed } = req.body;
  try {
    const newTodo = await prisma.task.create({
      data: {
        title,
        color,
        completed,
      },
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

// PUT: Update a Todo
app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  try {
    const updatedTodo = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

// DELETE: Delete a Todo
app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
