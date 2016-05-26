// dynamic imports aren't supported by ES6
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store_prod');
} else {
  module.exports = require('./store_dev');
}

//no default export here, exlint will complain
