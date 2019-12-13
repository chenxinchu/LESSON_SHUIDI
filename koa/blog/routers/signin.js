const router = require('koa-router')();
const controller = require('../controller/c-signin')
// 显示登陆页面
router.get('/signin',controller.getSignin);
router.post('/signin',controller.postSignin);

module.exports = router;