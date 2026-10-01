import {createReadStream, existsSync} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

import {
  categories,
  products,
} from '../../src/data/products'

const client = getCliClient({
  apiVersion: '2026-03-01',
})

async function importCategories() {
  console.log('\nImportando categorias...\n')

  for (const category of categories) {
    const document = {
      _id: `category-${category.id}`,
      _type: 'category',
      label: category.label,

      slug: {
        _type: 'slug',
        current: category.id,
      },

      chip: category.chip,
    }

    await client.createOrReplace(document)

    console.log(`✓ ${category.label}`)
  }
}

async function importProducts() {
  console.log('\nImportando produtos...\n')

  for (const product of products) {
    console.log(`→ ${product.name}`)

    const imagePath = path.resolve(
      process.cwd(),
      '..',
      'public',
      product.image.replace(/^\/+/, ''),
    )

    if (!existsSync(imagePath)) {
      throw new Error(
        `Imagem não encontrada para "${product.name}": ${imagePath}`,
      )
    }

    const imageAsset = await client.assets.upload(
      'image',
      createReadStream(imagePath),
      {
        filename: path.basename(imagePath),
      },
    )

    await client.createOrReplace({
      _id: `product-${product.id}`,
      _type: 'product',

      name: product.name,

      slug: {
        _type: 'slug',
        current: product.slug,
      },

      category: {
        _type: 'reference',
        _ref: `category-${product.category}`,
      },

      type: product.type,
      fragrance: product.fragrance,
      price: product.price,

      ...(product.presentationPrice !== undefined && {
        presentationPrice: product.presentationPrice,
      }),

      ...(product.weight && {
        weight: product.weight,
      }),

      ...(product.priceNote && {
        priceNote: product.priceNote,
      }),

      shortDescription: product.shortDescription,

      ...(product.fullDescription && {
        fullDescription: product.fullDescription,
      }),

      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
      },

      imageAlt: product.imageAlt,

      featured: product.featured ?? false,
      available: product.available ?? true,
      isKit: product.isKit ?? false,
    })

    console.log(`  ✓ importado`)
  }
}

async function main() {
  console.log('=== Biblioteca Aromática → Sanity ===')

  await importCategories()
  await importProducts()

  console.log('\n✓ Importação concluída!\n')
}

main().catch((error) => {
  console.error('\nErro durante a importação:')
  console.error(error)
  process.exit(1)
})