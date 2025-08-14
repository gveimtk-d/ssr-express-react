
import {renderToString} from 'react-dom/server'
import App from './App'
import getScrips from './utils/getScrips'
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
 const helloHtml = renderToString(<App/>);
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR Express+React</title>
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
