'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 通过抓取接口返回数据
    const api = this.config.api + '/appapi.php?a=getPortalList&catid=20&page=1';
    const response = await this.ctx.curl(api);
    const data = JSON.parse(response.data); // 将buffer转json
    return data.result;
  }

  async getNewsContent(aid) {
    // 通过抓取接口返回数据
    const api = this.config.api + '/appapi.php?a=getPortalArticle&aid=' + aid;
    const response = await this.ctx.curl(api);
    const data = JSON.parse(response.data); // 将buffer转json
    return data.result;
  }
}

module.exports = NewsService;
