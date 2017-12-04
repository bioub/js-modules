System.config({
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    'moment': 'node_modules/moment/moment.js'
  },
  transpiler: 'plugin-babel',
  packages: {
    'js': {
      defaultExtension: 'js'
    }
  }
});