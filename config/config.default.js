'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544667837723_5391';

  // add your config here
  config.middleware = [ 'printdate', 'forbidIp' ];

  config.printdate = {
    aaa: 'aaaaa',
  };

  config.forbidIp = {
    forbidIps: [ '127.0.0.1' ],
  };

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置公共的api
  config.api = 'http://www.phonegap100.com';

  return config;
};
