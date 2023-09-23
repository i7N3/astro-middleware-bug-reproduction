import { defineMiddleware, sequence } from 'astro/middleware';

export const middleware = defineMiddleware((context, next) => {
    if (context.url.pathname.includes('/login')) {
        context.cookies.set('acc', 'acc');
        context.cookies.set('jid', 'jid');
        return context.redirect('/dashboard');
    }
    return next();
});

export const onRequest = sequence(middleware);
