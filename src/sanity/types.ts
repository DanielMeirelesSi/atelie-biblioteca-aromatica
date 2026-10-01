export type CategoryId = string

export interface Category {
  id: CategoryId
  label: string
  chip: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: CategoryId
  categoryLabel?: string
  type: string
  fragrance: string
  price: number
  shortDescription: string
  fullDescription?: string
  image: string
  imageAlt: string
  featured?: boolean
  available?: boolean
  weight?: string
  presentationPrice?: number
  priceNote?: string
  isKit?: boolean
}
