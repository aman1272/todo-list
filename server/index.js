const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',require('./routes/route'))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Your server is running successfully on PORT ${PORT}`)
   }
);