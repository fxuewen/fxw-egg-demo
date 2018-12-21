'use strict';
const sd = require('silly-datetime');

module.exports = {
  // 格式化日期
  formatTime(param) {
    return sd.format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
  },
};
