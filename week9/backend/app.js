const express = require('express');

const { assignments } = require('./fakeDB');
// CORS: Cross Origin Resources
const cors = require('cors');

const app = express();
app.use(cors()); // anyone can access this data in backend

app.get("/api/assignments", (req, res) => {
    res.json(assignments);
})

app.listen(8080, () => console.log('listening on...'));