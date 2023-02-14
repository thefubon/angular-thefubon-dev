// https://fakestoreapi.com/products/1
import {IProduct} from '../models/product'

export const products: IProduct[] = [
  {
    isDone: true,
    grid: '!col-span-3 md:!col-span-2 lg:!col-span-2 xl:!col-span-3',
    bgOffers: 'font-bold text-2xl',
    title: 'Premier',
    price: 109.95,
    subtitle: '',
    description: 'все фильмы, сериалы и шоу',
    category: 'Огонь',
    image: '/assets/img/logo/premier.svg',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 1,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-base',
    title: 'Premier',
    price: 109.95,
    subtitle: 'без ограничений',
    description: 'все фильмы, сериалы и шоу',
    category: 'Продукты',
    image: '/assets/img/logo/premier.svg',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-base',
    title: 'Пятёрочка',
    price: 22.3,
    subtitle: '10%',
    description: 'скидка на покупки в онлайн-магазине и супермаркетах',
    category: 'Авто',
    image: '/assets/img/logo/pyaterka.svg',
    rating: {
      rate: 4.1,
      count: 259
    },
  },
  {
    id: 3,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-base',
    title: 'Газпромбанк',
    price: 45.3,
    subtitle: 'бесплатное',
    description: 'обслуживание дебетовой карты, повышенный кешбэк',
    category: 'Подарки',
    image: '/assets/img/logo/gpb.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 4,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-base',
    title: 'Ozon',
    price: 45.3,
    subtitle: 'бесплатная',
    description: 'курьерская доставка, повышенные бонусы за покупки',
    category: 'Подарки',
    image: '/assets/img/logo/ozon.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 5,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-base',
    title: 'Газпромнефть',
    price: 45.3,
    subtitle: '1,5 бонуса',
    description: 'за каждый литр топлива и кешбэк 25% за кофе',
    category: 'Подарки',
    image: '/assets/img/logo/gpn.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 6,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-base',
    title: 'Перекресток',
    price: 45.3,
    subtitle: '10%',
    description: 'скидка на 5 покупок в месяц, на сумму от 3000₽',
    category: 'Подарки',
    image: '/assets/img/logo/perekrestok.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    isDone: true,
    grid: '!col-span-3 md:!col-span-2 lg:!col-span-2 xl:!col-span-3',
    bgOffers: 'font-bold text-2xl',
    title: 'Premier',
    price: 109.95,
    subtitle: 'Действует до 12.10.2022',
    description: 'все фильмы, сериалы и шоу',
    category: 'Путешествия',
    image: '/assets/img/logo/premier.svg',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 7,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-travel',
    title: 'Fun&Sun',
    price: 45.3,
    subtitle: '6%',
    description: 'скидка на на путешествие мечты',
    category: 'Подарки',
    image: '/assets/img/logo/funsun.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 8,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-travel',
    title: 'Ренесанс жизнь',
    price: 45.3,
    subtitle: '99 ₽/мес',
    description: 'страхование жизни и здоровья',
    category: 'Подарки',
    image: '/assets/img/logo/renesans.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 9,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-travel',
    title: 'Островок',
    price: 45.3,
    subtitle: '15%',
    description: 'скидка на бронирование отелей',
    category: 'Подарки',
    image: '/assets/img/logo/ostrovok.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 10,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-travel',
    title: 'Согаз',
    price: 45.3,
    subtitle: '30%',
    description: 'экономии на страховании',
    category: 'Подарки',
    image: '/assets/img/logo/sogaz.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 11,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-travel',
    title: 'Golden Key',
    price: 45.3,
    subtitle: '2100 ₽',
    description: 'за доступ в бизнес-залы',
    category: 'Подарки',
    image: '/assets/img/logo/goldenkey.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    isDone: true,
    grid: '!col-span-3 md:!col-span-2 lg:!col-span-2 xl:!col-span-3',
    bgOffers: 'font-bold text-2xl',
    title: 'Premier',
    price: 109.95,
    subtitle: 'Действует до 12.10.2022',
    description: 'все фильмы, сериалы и шоу',
    category: 'Для дома и дачи',
    image: '/assets/img/logo/premier.svg',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 13,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Согаз',
    price: 45.3,
    subtitle: '30%',
    description: 'экономии на страховании',
    category: 'Подарки',
    image: '/assets/img/logo/sogaz.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 14,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Hoff',
    price: 45.3,
    subtitle: '10%',
    description: 'скидка на любые покупки',
    category: 'Подарки',
    image: '/assets/img/logo/hoff.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 15,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Boxberry',
    price: 45.3,
    subtitle: 'до 25%',
    description: 'на отправление посылок',
    category: 'Подарки',
    image: '/assets/img/logo/box.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 16,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Obi',
    price: 45.3,
    subtitle: 'до 15%',
    description: 'скидка на все товары для дома',
    category: 'Подарки',
    image: '/assets/img/logo/obi.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 17,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Грузовичкоф',
    price: 45.3,
    subtitle: 'до 20%',
    description: 'скидка на грузовые перевозки',
    category: 'Подарки',
    image: '/assets/img/logo/gruz.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 18,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Ситилинк',
    price: 45.3,
    subtitle: '500 бонусов',
    description: 'за покупки каждый месяц',
    category: 'Подарки',
    image: '/assets/img/logo/sity.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  },
  {
    id: 19,
    isDone: false,
    grid: '',
    bgOffers: 'bg-offers-dacha',
    title: 'Технопарк',
    price: 45.3,
    subtitle: 'до 20%',
    description: 'скидка на бытовую технику',
    category: 'Подарки',
    image: '/assets/img/logo/techno.svg',
    rating: {
      rate: 6.1,
      count: 259
    },
  }
]