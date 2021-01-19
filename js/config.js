const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
    USD: 27.96,
    RUB: 0.38,
};

const BASKET = {
    elements: 4,
    price: 4000,
};

const TOP_MENU = {
    catalog: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    payment_delivery: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    }/*,
    payment_delivery2: {
        order: 3,
        title: 'Payment and delivery2',
        url: 'payment_delivery.html',
    },
    payment_delivery3: {
        order: 3,
        title: 'Payment and delivery3',
        url: 'payment_delivery.html',
    },
    payment_delivery4: {
        order: 3,
        title: 'Payment and delivery4',
        url: 'payment_delivery.html',
    },
    payment_delivery5: {
        order: 3,
        title: 'Payment and delivery5',
        url: 'payment_delivery.html',
    },
    payment_delivery6: {
        order: 3,
        title: 'Payment and delivery6',
        url: 'payment_delivery.html',
    },
    payment_delivery7: {
        order: 3,
        title: 'Payment and delivery7',
        url: 'payment_delivery.html',
    },
    payment_delivery8: {
        order: 3,
        title: 'Payment and delivery8',
        url: 'payment_delivery.html',
    }*/
};

const MENU = [
    {
        order: 1,
        title: 'VOIP ОБОРУДОВАНИЕ',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        title: 'SKYPE оборудование',
        url: 'skype_equipment.html',
    },
    {
        order: 3,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
    },
    {
        order: 0,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    },
    {
        order: 4,
        title: 'VIDEO оборудование',
        url: 'video_equipment.html',
    }
];

const NEWS = [
    {
        date: '2021/01/01',
        title: 'Новинка от «Элтекс» - точка доступа WEP',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2020/12/25',
        title: 'Новинка от компании Grandstream!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/14',
        title: 'WiFi точка доступа от компании Grandstream!',
        description: 'Уже скоро в продаже!',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/09/18',
        title: 'Случайная новость',
        description: 'Уже скоро в продаже!',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/06/31',
        title: 'Еще одна Случайная новость',
        description: 'Уже скоро в продаже!',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/11/13',
        title: 'Хорошая новость',
        description: 'Уже скоро в продаже!',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/05/10',
        title: 'Плохая новость',
        description: 'Уже скоро в продаже!',
        img: './images/news-img2.jpg',
        url: 'voip_equipment.html',
    },
];

const BANNER = [
    {
        order: 1,
        img: './images/r1.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        img: './images/r1.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        img: './images/r1.jpg',
        url: 'voip_equipment.html',
    }
    
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/slider-img1.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '1998/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP 2',
        img: './images/slider-img1.jpg',
        price: '2000',
        oldPrice: '3500',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP 3',
        img: './images/slider-img1.jpg',
        price: '999',
        oldPrice: '1000',
        currency: 'UAH',
        date: '2021/05/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP 4',
        img: './images/slider-img1.jpg',
        price: '1000',
        oldPrice: '11100',
        currency: 'RUB',
        date: '2021/01/05',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP 5',
        img: './images/slider-img1.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2020/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'new',
        description: 'IP телефон Siemens Gigaset C530A IP 6',
        img: './images/slider-img1.jpg',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    // RECOMMENDED
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/slider-img1.jpg',
        price: '1300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP 1',
        img: './images/slider-img1.jpg',
        price: '3000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP 2',
        img: './images/slider-img1.jpg',
        price: '330',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP 3',
        img: './images/slider-img1.jpg',
        price: '33300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP 4',
        img: './images/slider-img1.jpg',
        price: '3000',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'recommended',
        description: 'IP телефон Siemens Gigaset C530A IP 5',
        img: './images/slider-img1.jpg',
        price: '300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    //SALE
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/slider-img1.jpg',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP 1',
        img: './images/slider-img1.jpg',
        price: '150',
        oldPrice: '2000',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP 2',
        img: './images/slider-img1.jpg',
        price: '300',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP 3',
        img: './images/slider-img1.jpg',
        price: '1150',
        oldPrice: '1200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP 4',
        img: './images/slider-img1.jpg',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'sale',
        description: 'IP телефон Siemens Gigaset C530A IP 4',
        img: './images/slider-img1.jpg',
        price: '150',
        oldPrice: '150',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/action-img1.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/action-img1.jpg',
        url: 'https://same_url/item.html',
    }
    ,
    {
        title: 'Название акции 3',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/action-img1.jpg',
        url: 'https://same_url/item.html',
        time_action: '10d 12h 25m'
    }
    ,
    {
        title: 'Название акции 4',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/action-img1.jpg',
        url: 'https://same_url/item.html',
        time_action: '0d 0h 10m'
    }
    ,
    {
        title: 'Название акции 5',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: './images/action-img1.jpg',
        url: 'https://same_url/item.html',
    }
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Название товара',
        img: './images/img-block3.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: './images/img-block3.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 3',
        img: './images/img-block3.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 4',
        img: './images/img-block3.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 5',
        img: './images/img-block3.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 5',
        img: './images/img-block3.png',
        url: 'https://same_url/item.html',
    },
]