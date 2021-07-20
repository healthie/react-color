const fs = require('fs')
const path = require('path')

const originalBabelRC = fs
  .readFileSync(path.join(__dirname, '../.babelrc'))
  .toString()

fs.writeFileSync(path.join(__dirname, '../.babelrc_backup'), originalBabelRC)

const esBabelRC = {
  presets: [
    ['es2015', { modules: false }],
    'stage-0',
    'react',
  ],
}

fs.writeFileSync(path.join(__dirname, '../.babelrc'), JSON.stringify(esBabelRC))
