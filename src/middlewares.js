const { createMiddleware } = require('hono/factory');

// ページの閲覧に認証を必須にするミドルウェア
function ensureAuthenticated() {
    return createMiddleware(async (createMiddleware, next) => {
        const session = createMiddleware.get('session');
        if (!session.user) {
            return createMiddleware.redirect('/login');
        }
        await next();
    })
}

module.exports = {
    ensureAuthenticated,
};