const Koa = require('koa');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

// Import Routes
const authRoutes = require('./routes/auth');

const app = new Koa();
const PORT = process.env.PORT || 8163;

// CORS Configuration
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Sessions
// app.use(session(app));

// Body Parser
app.use(koaBody());

app.use(authRoutes.routes());

// Server
const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;