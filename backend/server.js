const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Hello World from Backend!');
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});