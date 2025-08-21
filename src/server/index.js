
import {renderToString} from 'react-dom/server'
import React from 'react';
import App from './App'
import getScrips from './utils/getScrips'
import { getLinks } from './utils/getLinks';
import { log } from 'console';
const express = require('express');
const path = require('path');

const app = express();

// 静态文件服务
app.use(express.static(path.join( 'public')));

// 日志中间件
app.use((req, res, next) => {
  console.log('Incoming request:');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Path:', req.path);
  console.log('Query:', req.query);
  next();
});

// 处理所有路由
app.use((req, res) => {
  console.log('Processing route:', req.url);

  try {
    // 确保 URL 是有效的
    const sanitizedUrl = req.url.replace(/[<>]/g, '');
    const helloHtml = renderToString(<App url={sanitizedUrl} />);
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
  } catch (error) {
    console.error('Rendering error:', error);
    console.error('Error stack:', error.stack);
     
    // 详细的错误响应
    res.status(500).send(`
      <html>
        <body>
          <h1>服务器渲染错误</h1>
          <pre>${error.message}</pre>
          <pre>${error.stack}</pre>
        </body>
      </html>
    `);
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);  
});
   