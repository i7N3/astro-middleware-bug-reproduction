import { defineMiddleware, sequence } from 'astro/middleware';

export const middleware = defineMiddleware((context, next) => {
    if (context.url.pathname.includes('/login')) {
        context.cookies.set('jid', '<TOKEN>');
        return context.redirect('/dashboard');
    }
    return next();
});

export const onRequest = sequence(middleware);
