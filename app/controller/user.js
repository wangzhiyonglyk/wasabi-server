'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    let params=this.ctx.request.body;
    const results = await this.app.mysql.select('users',params);
    this.ctx.response.body={statusCode:200}
  }
  async page() {
    const { ctx } = this;
    let params=this.ctx.request.body;
    const results = await this.app.mysql.select('users');
    this.ctx.response.body={statusCode:200,data:results}
  }
  async update() {
    const { ctx } = this;
 
    let params=this.ctx.request.body;
    const results = await this.app.mysql.update('users', params); // 更新 posts 表中的记录
    this.ctx.response.body={statusCode:200,data:results}
  }
  async add() {
    const { ctx } = this;
 
    let params= {...this.ctx.request.body}
    delete params.id; 
    const results = await this.app.mysql.insert('users',params);
    this.ctx.response.body={statusCode:200,data:results}
  }
  async delete() {
    const { ctx } = this;
    let params=this.ctx.request.body;
    const results = await this.app.mysql.delete('users',params);
    this.ctx.response.body={statusCode:200,data:results}
  }
}

module.exports = UserController;
