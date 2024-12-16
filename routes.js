const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return JSON.stringify({
            message: 'Homepage'
            });
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses menggunakan method tersebut';
        },
    },


    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses menggunakan method tersebut';
        },
    },


    {
        method: 'GET',
        path: '/hello/{username?}',
        handler: (request, h) => {
            const { username = 'stranger' } = request.params;
            const { lang } = request.query;
            if (lang === 'ID') {
                return { message: `Hai ${username}`};
            }
            return { message: `Hello ${username}`};
        }
    },


    {
        method: 'POST',
        path: '/user',
        handler: (request, h) => {
            const { username } = request.payload;
            const response = h.response(`welcome ${username}`).code(200);
            response.type('application/json');
            response.header('Content-Type', 'application/json');

            return response;
        }

    },


    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}, your password ${password}`;
        },
    },


    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },

];

module.exports = routes;