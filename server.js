const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const http = require('http').Server(app);
const io = require('./io');
io.attach(http);

const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const resourcesRouter = require('./routes/resources');
const flashCardRouter = require('./routes/flashcards')
const notesRouter = require('./routes/notes')
const userInfoRouter = require('./routes/userInfo')

const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/resources', resourcesRouter)
app.use('/api/flashcards', flashCardRouter)
app.use('/api/notes', notesRouter)
app.use('/api/userInfo', userInfoRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

http.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});
