const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
global.__basedir = process.cwd();
const URI = process.env.DATABASE.replace(
    '<DB_PASSWORD>',
    process.env.DB_PASSWORD
);
// create new express app and save it as "app"
const app = express();

//Connect DB
const connectDb = async () => {
    try
    {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
        });
        console.info(`Connected to database with process id ${process.pid}`);
    } catch (error)
    {
        console.error(
            `Connection error: ${error.stack} with process id ${process.pid}`
        );
        process.exit(1);
    }
};
connectDb().catch(error => console.error(error));

// server configuration
const PORT = process.env.PORT || 3000;
//parse body
app.use(express.json({ type: 'application/json', limit: '50kb' }));
app.use(express.urlencoded({ extended: true }));
//view
app.set('view engine', 'pug');
app.set('views', 'views');
app.engine('pug', require('pug').__express);
// create a route for the app
app.use('/', require(__basedir + '/router'));


// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});