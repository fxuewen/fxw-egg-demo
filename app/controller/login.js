'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    this.ctx.type = 'json';
    this.ctx.body = {
      userNanme: 'zhangsan',
      age: 18,
    };
  }
}

module.exports = LoginController;
