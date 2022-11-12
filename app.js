const express = require('express');

const db = require('./data/database');
// const qoutesRoutes = require('./routes/quotes.routes');
const todosRoutes = require('./routes/todos.routes');
const enableCors = require('./middlewares/cors');

const app = express();

// app.use('/quote', qoutesRoutes);
app.use(enableCors);
app.use(express.json());

app.use('/todos', todosRoutes);

app.use(function (error, req, res, next) {
    res.status(500).json({
        message: 'Something went wrong'
    });
});

let POST = 3000;

db.initDb().then(function () {
    app.listen(POST, () => {
        console.log(`Server is listen to PORT ${POST}`);
    });
}).catch(function (error) {
    console.log('Connecting to the database failed');
});