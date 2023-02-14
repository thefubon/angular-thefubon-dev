export interface IProduct {
  id?: number
  title: string
  price: number
  subtitle: string
  bgOffers: string
  grid: string
  isDone: true|false
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}