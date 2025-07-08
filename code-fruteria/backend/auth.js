const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET = 'demo_secret_key';

// Dummy user
const USER = { username: 'admin', password: '1234' };

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

router.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    res.json({ user: decoded.username });
  } catch {
    res.sendStatus(403);
  }
});

module.exports = router;
