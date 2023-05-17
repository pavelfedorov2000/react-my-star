enum Page {
    Home = 'Home',
    About = 'About',
    Catalog = 'Catalog',
    Favorite = 'Favorite',
    ProductCard = 'ProductCard',
    Cart = 'Cart',
    Checkout = 'Checkout',
    Profile = 'Profile',
    Shops = 'Shops',
    Guarantee = 'Guarantee',
    Delivery = 'Delivery',
    Sale = 'Sale',
    NotFound = 'NotFound',
}

enum SubPage {
    CurrentOrders = 'CurrentOrders',
    OrdersHistory = 'OrdersHistory',
    Discounts = 'Discounts',
    Subscribes = 'Subscribes',
    Personal = 'Personal',
}

export const Pages = {
    [Page.Home]: {
        title: 'Главная',
        path: '/'
    },
    [Page.Catalog]: {
        title: 'Каталог',
        path: '/catalog',
        inHeader: true,
        emptyBlock: {
            text: 'Нет актуальных товаров'
        },
    },
    [Page.Favorite]: {
        title: 'Избранное',
        path: '/favorite',
        emptyBlock: {
            text: 'Нет товаров, добавленных в избранное'
        }
    },
    [Page.ProductCard]: {
        path: '/product-card/:id'
    },
    [Page.Cart]: {
        title: 'Корзина',
        path: '/cart',
        emptyBlock: {
            text: 'Ваша корзина пока пуста'
        }
    },
    [Page.Checkout]: {
        title: 'Оформить заказ',
        path: '/checkout',
    },
    [Page.Sale]: {
        title: 'Акции',
        path: '/sale',
        inHeader: true,
        emptyBlock: {
            text: 'Список акций пока пуст'
        }
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
    [SubPage.CurrentOrders]: {
        title: 'Действующие заказы',
        path: '/profile/orders',
        emptyBlock: {
            text: 'Список действующих товаров пока пуст'
        }
    },
    [SubPage.OrdersHistory]: {
        title: 'История заказов',
        path: '/profile/orders-history',
        emptyBlock: {
            text: 'История заказов пока пуста'
        }
    },
    [SubPage.Discounts]: {
        title: 'Скидки',
        path: '/profile/discounts'
    },
    [SubPage.Subscribes]: {
        title: 'Подписки',
        path: '/profile/subscribes',
        emptyBlock: {
            text: 'Список подписок пока пуст'
        }
    },
    [SubPage.Personal]: {
        title: 'Персональные данные',
        path: '/profile/personal'
    }
}