import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',

  fields: [
    defineField({
      name: 'label',
      title: 'Nome da categoria',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Identificador',
      type: 'slug',
      description: 'Usado internamente pelo site.',
      options: {
        source: 'label',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'chip',
      title: 'Nome curto no filtro',
      type: 'string',
      description: 'Ex.: Sabonetes, Velas, Kits',
      validation: (rule) => rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'label',
      subtitle: 'chip',
    },
  },
})