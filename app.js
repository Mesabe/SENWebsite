require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db =  process.env.DATABASE_CONN_URL;

const mongoose = require('mongoose')
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true });
const selectedDb = mongoose.connection;
selectedDb.on('error', ()=>{console.log("ERROR: Connection Failed");})
selectedDb.once('open',()=> {console.log('Conection successful!');})

app.use(express.json());

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

const jediRouter = require('./routes/jedi')
app.use('/jedi', jediRouter );