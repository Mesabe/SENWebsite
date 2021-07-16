require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const db =  process.env.DATABASE_CONN_URL;
