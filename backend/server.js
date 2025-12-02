const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// test route
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend running successfully!' });
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
