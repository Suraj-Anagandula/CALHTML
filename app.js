const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add todo
app.post('/add', (req, res) => {
    const { task } = req.body;
    if (task) {
        todos.push(task);
    }
    res.json({ success: true });
});

// Delete todo
app.post('/delete', (req, res) => {
    const { index } = req.body;
    todos.splice(index, 1);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
