// https://fakestoreapi.com/products/1
import {IProduct} from '../models/product'

export const products: IProduct[] = [
  {
    id: 1,
    title: 'Лента',
    price: 109.95,
    description: '13% на 5 покупок в месяц',
    category: 'Продукты',
    image: 'https://cdn.ogon.ru/insecure/q:80/resize:fill:56:56:1/gravity:ce/dpr:2/aHR0cDovL2JhY2tlbmQtZWNvc3lzdGVtLWZpbGUtc2VydmVyLWRvd25sb2FkLWh0dHA6ODA4MS92MS9maWxlcy9kb3dubG9hZC9wYXJ0bmVyL2ljb25faW1hZ2UvMDkxZGUyNjQ2NmM4ODAwOTc0ZDIwNDYzNjMzOTFjNzE.webp',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Газпромнефть',
    price: 22.3,
    description: '1,5 бонуса за каждый литр топлива и 25% кешбэк за кофе',
    category: 'Авто',
    image: 'https://cdn.ogon.ru/insecure/q:80/resize:fill:56:56:1/gravity:ce/dpr:2/aHR0cDovL2JhY2tlbmQtZWNvc3lzdGVtLWZpbGUtc2VydmVyLWRvd25sb2FkLWh0dHA6ODA4MS92MS9maWxlcy9kb3dubG9hZC9wYXJ0bmVyL2ljb25faW1hZ2UvYjYwMTJiN2FiNGFiYTYzODFjMjZmMmI5M2VmMmU4Y2M.webp',
    rating: {
      rate: 4.1,
      count: 259
    },
  },
  {
    id: 3,
    title: 'FLOWWOW',
    price: 45.3,
    description: 'Скидка 11% на букеты, подарки и необычные товары',
    category: 'Подарки',
    image: 'https://cdn.ogon.ru/insecure/q:80/resize:fill:56:56:1/gravity:ce/dpr:2/aHR0cDovL2JhY2tlbmQtZWNvc3lzdGVtLWZpbGUtc2VydmVyLWRvd25sb2FkLWh0dHA6ODA4MS92MS9maWxlcy9kb3dubG9hZC9wYXJ0bmVyL2ljb25faW1hZ2UvMmI3Y2NkMTE1ZTQzY2JjNTI1ODFjMzY0N2Y4N2ExMTk.webp',
    rating: {
      rate: 6.1,
      count: 259
    },
  }
]