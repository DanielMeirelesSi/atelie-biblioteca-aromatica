import {createClient} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID não foi definido')
}

if (!dataset) {
  throw new Error('NEXT_PUBLIC_SANITY_DATASET não foi definido')
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-01',
  useCdn: false,
  perspective: 'published',
})