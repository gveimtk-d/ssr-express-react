
import {renderToString} from 'react-dom/server'
import React from'react';
import App from './App'
import getScrips from './utils/getScrips'
import { getLinks } from './utils/getLinks';
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
 const helloHtml = renderToString(<App url={req.url} />);
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR Express+React</title>
      ${getLinks()}
    </head>
    <body>
      <div id="root">
      ${helloHtml}
      </div>
      ${getScrips()}
    </body>
  </html> 
  ` 
  res.send(html);
});

const port =  8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);  
});
