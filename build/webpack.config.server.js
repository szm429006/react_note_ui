const path = require('path')

module.exports = {
  taarget: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
  }
}
