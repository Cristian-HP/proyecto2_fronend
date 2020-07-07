const express = require('express');
const app = express();
const himalaya = require('himalaya');
const cors = require('cors')

app.use(cors());
app.use(express.static('public'));



app.listen(3000, () => {
    console.log('Servidor del Fron end \n ');
    console.log('Servidor iniciado en el puerto 3000');
})