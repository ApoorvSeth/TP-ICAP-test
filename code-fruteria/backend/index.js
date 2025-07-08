const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');

const app = express();
const PORT = 4000;

app.use(cors());                    // Allow CORS for frontend
app.use(bodyParser.json());        // Parse JSON request bodies
app.use(authRoutes);               // Mount /login route from auth.js

app.listen(PORT, () => {
  console.log(`Auth server running at http://localhost:${PORT}`);
});
