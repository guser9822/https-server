const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3958;
const path = require('path') 
const parent_path = path.resolve(__dirname, '..')

const key = fs.readFileSync(parent_path+'\\certificates\\selfsigned.key');
const cert = fs.readFileSync(parent_path+'\\certificates\\selfsigned.crt');
const options = {
  key: key,
  cert: cert
};

app = express()
app.get('/secure-api/hello', (req, res) => {
   res.send({
       description: 'WOW!! You did it!',
       method : req.method, 
       protocol: req.protocol,
       hostname: req.hostname,
       port: req.port,
    });
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});