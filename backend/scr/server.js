const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();


mongoose.connect("mongodb+srv://marcelo:mAr43571807@cluster0-0ux1c.mongodb.net/tindev?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
server.use(express.json());
server.use(routes);

server.listen(3333);