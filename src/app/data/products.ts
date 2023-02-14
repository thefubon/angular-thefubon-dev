// https://fakestoreapi.com/products/1
import {IProduct} from '../models/product'

export const products: IProduct[] = [
  {
    id: 1,
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
  }
]