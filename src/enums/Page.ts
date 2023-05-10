enum Page {
    Home = 'Home',
    About = 'About',
    Catalog = 'Catalog',
    Favorite = 'Favorite',
    ProductCard = 'ProductCard',
    Cart = 'Cart',
    Profile = 'Profile',
    Shops = 'Shops',
    Guarantee = 'Guarantee',
    Delivery = 'Delivery',
    Sale = 'Sale',
    NotFound = 'NotFound',
}

enum SubPage {
    Orders = 'Orders',
    OrderDetail = 'OrderDetail',
    Discounts = 'Discounts',
    Subscribes = 'Subscribes',
    Personal = 'Personal',
}

export const Pages = {
    [Page.Home]: {
        path: '/'
    },
    [Page.Catalog]: {
        title: 'Каталог',
        path: '/catalog',
        empty: 'Нет актуальных товаров',
        inHeader: true,
    },
    [Page.Favorite]: {
        title: 'Избранные товары',
        path: '/favorite',
        empty: 'Нет актуальных товаров'
    },
    [Page.ProductCard]: {
        path: '/product-card/:id'
    },
    [Page.Cart]: {
        title: 'Ваша корзина',
        path: '/cart',
        empty: 'Ваша корзина пуста'
    },
    [Page.Sale]: {
        title: 'Акции',
        path: '/sale',
        inHeader: true,
    },
    [Page.About]: {
        title: 'О нас',
        path: '/about',
        inHeader: true,
    },
    [Page.Shops]: {
        title: 'Магазины',
        path: '/shops',
        inHeader: true,
    },
    [Page.Guarantee]: {
        title: 'Гарантия',
        path: '/guarantee',
        inHeader: true,
    },
    [Page.Delivery]: {
        title: 'Доставка и оплата',
        path: '/delivery',
        inHeader: true,
    },
    [Page.Profile]: {
        title: 'Гарантия',
        path: '/guarantee',
        inHeader: true,
    },
    [Page.NotFound]: {
        title: 'Похоже, мы не можем найти нужную вам страницу',
        path: '/not-found'
    }
}

export const SubPages = {
    [SubPage.Orders]: {
        title: 'Мои заказы',
        path: '/orders',
        empty: 'Нет актуальных товаров'
    },
    [SubPage.OrderDetail]: {
        title: 'Заказ №',
        path: '/orders/:index'
    },
    [SubPage.Discounts]: {
        title: 'Скидки',
        path: '/discounts'
    },
    [SubPage.Subscribes]: {
        title: 'Управление подписками',
        path: '/subscribes'
    },
    [SubPage.Personal]: {
        title: 'Персональные данные',
        path: '/personal'
    }
}