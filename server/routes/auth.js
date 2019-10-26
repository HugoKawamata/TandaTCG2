const Router = require('koa-router');
const url = require('url');

// Set up Router
const router = new Router();

router.get('/signin', async ctx => {
    try {
        const { code } = url.parse(ctx.req.url, true).query;
        console.log('code: ', code);
        // Use this code here: 
        //      https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/consumer/context#step-3-exchange-authorization-code-for-an-access-token
        ctx.status = 200;
        ctx.body = { code };
    } catch (err) {
        console.log('Error getting access_token: ', err);
        ctx.status = 500;
        ctx.body = { error: err };
    }
});

module.exports = router;
