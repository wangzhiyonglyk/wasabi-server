'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/users/login",controller.user.login);//用户登录接口
  router.post("/users/page",controller.user.page);//用户登录接口
  router.post("/users/update",controller.user.update);//用户登录接口
  router.post("/users/add",controller.user.add);//用户登录接口
  router.post("/users/delete",controller.user.delete);//用户登录接口
};
