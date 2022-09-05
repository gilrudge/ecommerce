const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const routes = require('./routes/routes');
dotenv.config({path:'./.env'});

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);


// const PORT = 3000;
app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});

