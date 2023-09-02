import { defineMiddleware, sequence } from 'astro/middleware';

export const middleware = defineMiddleware(async (context, next) => {
    console.log('pathname: ', context.url.pathname);

    if (context.url.pathname.includes('/login')) {
        return new Response(null, {
            status: 301,
            headers: {
                Location: '/dashboard',
                'Set-Cookie': 'jid=HelloWorld; Path=/;',
            },
        });
    }

    return next();
});

export const onRequest = sequence(middleware);
