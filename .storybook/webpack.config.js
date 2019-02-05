const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        enforce: 'pre'
      }
    ]
  }
};
