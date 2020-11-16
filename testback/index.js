const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req,res) => {
    return res.send("Homepage");
});
app.get('/Login', (req, res) => {
    return res.send('your are in login route');
});

app.get('/Signin', (req, res) => {
    return res.send('your are in signin route');
});

app.listen(port, () => {
    console.log("server is up and running...");
});