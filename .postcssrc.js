// https://github.com/michael-ciniawsky/postcss-load-config

var postcssPr = require('postcss-pr');
var autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    postcssPr({fontSize: 32}),
    autoprefixer
  ]
  /*  // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {},
  }*/
}
