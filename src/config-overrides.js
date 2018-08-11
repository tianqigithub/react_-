const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
  //针对antd-mobile通过babel-plugin-import实现按需打包，并自动打包其需要
  config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
  return config;
}
