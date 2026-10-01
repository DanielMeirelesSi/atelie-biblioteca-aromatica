import type {SanityImageSource} from '@sanity/image-url'

import {sanityClient} from './client'
import {urlForImage} from './image'
import type {Category, Product} from './types'

interface SanityProduct extends Omit<Product, 'image'> {
  image: SanityImageSource
}

const productFields = `
  "id": _id,
  "slug": slug.current,
  name,
  "category": category->slug.current,
  "categoryLabel": category->label,
  type,
  fragrance,
  price,
  shortDescription,
  fullDescription,
  image,
  imageAlt,
  featured,
  available,
  weight,
  presentationPrice,
  priceNote,
  isKit
`

const categoriesQuery = `
  *[_type == "category" && defined(slug.current)]
  | order(_createdAt asc) {
    "id": slug.current,
    label,
    chip
  }
`

const productsQuery = `
  *[_type == "product" && defined(slug.current)]
  | order(_createdAt asc) {
    ${productFields}
  }
`

const productBySlugQuery = `
  *[
    _type == "product" &&
    slug.current == $slug
  ][0] {
    ${productFields}
  }
`

const slugsQuery = `
  *[_type == "product" && defined(slug.current)].slug.current
`

function normalizeProduct(product: SanityProduct): Product {
  return {
    ...product,

    image: urlForImage(product.image)
      .width(1200)
      .height(1200)
      .fit('crop')
      .auto('format')
      .url(),
  }
}

export async function getCategories(): Promise<Category[]> {
  return sanityClient.fetch<Category[]>(categoriesQuery, {}, {
    cache: 'force-cache',
    next: {
      tags: ['sanity'],
    },
  })
}

export async function getProducts(): Promise<Product[]> {
  const products = await sanityClient.fetch<SanityProduct[]>(productsQuery, {}, {
    cache: 'force-cache',
    next: {
      tags: ['sanity'],
    },
  })

  return products.map(normalizeProduct)
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  const product = await sanityClient.fetch<SanityProduct | null>(
    productBySlugQuery,
    {slug},
    {
      cache: 'force-cache',
      next: {
        tags: ['sanity'],
      },
    },
  )

  return product ? normalizeProduct(product) : undefined
}

export async function getAllSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(slugsQuery, {}, {
    cache: 'force-cache',
    next: {
      tags: ['sanity'],
    },
  })
}
