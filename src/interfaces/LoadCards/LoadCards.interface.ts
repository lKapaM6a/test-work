export interface LoadCards {
  id: number
  labels?: cardLabels[]
  image: cardImage
  color?: cardColors[]
  available: boolean
  cashback?: string
  name: cardName
  rating?: cardRating
  price: cardPrice
  chars?: cardChars[]
}

type cardLabels = {
  id: number
  text: string
  bgColor: string
  color: string
}

type cardImage = {
  image: string
  url: string
  label?: string
}

type cardColors = {
  id: number
  color: string
  label: string
  url: string
  border?: string
  active?: boolean
}

type cardName = {
  name: string
  url: string
}

type cardRating = {
  rating: number
  url: string
}

type cardPrice = {
  oldPrice?: string
  price: string
  discount?: string
}

type cardChars = {
  id: number
  info: string
  detail: string
}
