const express = require('express');
const cors    = require('cors');
const helmet  = require('helmet');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/auth',          require('./routes/auth'));
app.use('/api/users',         require('./routes/users'));
app.use('/api/profile',       require('./routes/profile'));
app.use('/api/trips',         require('./routes/trips'));
app.use('/api/matching',      require('./routes/matching'));
app.use('/api/ai',            require('./routes/ai'));
app.use('/api/chat',          require('./routes/chat'));
app.use('/api/expenses',      require('./routes/expenses'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/reviews',       require('./routes/reviews'));

app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.use(errorHandler);

module.exports = app;
