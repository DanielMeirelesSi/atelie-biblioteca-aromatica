import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Produto',
  type: 'document',

  initialValue: {
    available: true,
    featured: false,
    isKit: false,
  },

  fields: [
    defineField({
      name: 'name',
      title: 'Nome do produto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'URL do produto',
      type: 'slug',
      description: 'Clique em Generate para criar automaticamente.',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'string',
      description: 'Ex.: Sabonete artesanal, Vela aromática, Kit',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'fragrance',
      title: 'Fragrância',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Preço',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),

    defineField({
      name: 'presentationPrice',
      title: 'Preço com embalagem presenteável',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),

    defineField({
      name: 'weight',
      title: 'Peso / Volume',
      type: 'string',
      description: 'Ex.: 90 g, 100 ml, 250 ml',
    }),

    defineField({
      name: 'priceNote',
      title: 'Observação de preço',
      type: 'string',
    }),

    defineField({
      name: 'shortDescription',
      title: 'Descrição curta',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'fullDescription',
      title: 'Descrição completa',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'image',
      title: 'Imagem do produto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'imageAlt',
      title: 'Descrição da imagem',
      type: 'string',
      description: 'Texto para acessibilidade e SEO.',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featured',
      title: 'Produto em destaque',
      type: 'boolean',
    }),

    defineField({
      name: 'available',
      title: 'Disponível',
      type: 'boolean',
    }),

    defineField({
      name: 'isKit',
      title: 'É um kit?',
      type: 'boolean',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'fragrance',
      media: 'image',
      available: 'available',
    },

    prepare({title, subtitle, media, available}) {
      return {
        title,
        subtitle: `${available === false ? 'Indisponível · ' : ''}${subtitle ?? ''}`,
        media,
      }
    },
  },
})