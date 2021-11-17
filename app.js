const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const engine = require('express-handlebars')
const connectDB = require('./config/db');

// load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

//logging
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

//handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set("views", "./views");


const PORT = process.env.PORT || 3000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)