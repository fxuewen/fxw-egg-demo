'use strict';

module.exports = options => {
  // 返回一个异步的方法
  return async function forbidIp(ctx, next) {
    // 获取客户端的ip
    console.log(ctx.request.ip);
    if (options.forbidIps.indexOf(ctx.request.ip) >= 0) {
      ctx.status = 403;
      ctx.body = '您的ip已经被屏蔽';
    } else {
      await next();
    }
  };
};
