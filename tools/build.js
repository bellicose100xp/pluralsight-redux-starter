/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackProdConfig from '../webpack.config.prod';
import colors from 'colors';

//this assures the babel dev config (for hot reloading) doesn't apply
process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production. This will take a moment...'.blue);

webpack(webpackProdConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1; //?? why
  }
  
  const jsonStats = stats.toJson();
  
  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(err => { console.log(err.red);});
  }
  
  if(jsonStats.hasWarnings) {
    console.log('webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => {console.log(warning.yellow);});
  }
  
  console.log(`Webpack stats: ${stats}`);
  
  console.log('Your app has been compied in the production mode and writtern to /dist. It\'s ready to roll!'.green);
  
  return 0;
});

