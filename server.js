const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { SESSION_SECRET } = require('./lib/auth');

const app = express();
app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
app.use(express.json({ limit: '64kb' }));
app.use(cookieParser(SESSION_SECRET));

// Admin first so /admin always asks for the password
app.use('/admin', require('./routes/admin'));
app.use('/api', require('./routes/public'));

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'], maxAge: '1h' }));
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'public', '404.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Steppin' Out site running on :${PORT}`));
