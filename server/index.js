const express = require('express');
const db = require('./database/campusdb')
const router = require('./routes/login')
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())
app.use('/api',router)
app.listen(3000,()=>{
    console.log(`Server is running at 3000 port.`);
})