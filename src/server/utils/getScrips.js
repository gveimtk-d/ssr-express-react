const fs = require('fs');
module.exports = function getScrips() {
  const files = fs.readdirSync('./public/js');
  const result = files.filter(file => file.endsWith('.js')).map(file => 
    `<script src="./js/${file}"></script>`
  ).join('\n');
  return  result 
}
