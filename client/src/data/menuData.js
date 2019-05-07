export default [
    {
        title: 'Главная',
        link: '/',
        role: 'ALL'
    },
    {
        title: 'Цены',
        link: '/pricing',
        role: 'ALL'

    },
    {
        title: 'Контакты',
        link: '/contact',
        role: 'ALL'
    },
    {
        title: 'Моя страница',
        link: '/user',
        role: 'USER_ONLY'
    },
    {
        title: 'Вход',
        link: '/login',
        role: 'VISITOR_ONLY',
    },
    {
        title: 'Клиенты',
        link: '/users',
        role: 'ADMIN_ONLY'
    }
];
