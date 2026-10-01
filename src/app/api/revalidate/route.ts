import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import {
  isValidSignature,
  SIGNATURE_HEADER_NAME,
} from '@sanity/webhook'

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json(
      {error: 'SANITY_REVALIDATE_SECRET não configurado'},
      {status: 500},
    )
  }

  const signature = request.headers.get(SIGNATURE_HEADER_NAME)

  if (!signature) {
    return NextResponse.json(
      {error: 'Assinatura do webhook ausente'},
      {status: 401},
    )
  }

  const rawBody = await request.text()
  const valid = await isValidSignature(rawBody, signature, secret)

  if (!valid) {
    return NextResponse.json(
      {error: 'Assinatura do webhook inválida'},
      {status: 401},
    )
  }

  let payload: unknown

  try {
    payload = JSON.parse(rawBody)
  } catch {
    return NextResponse.json(
      {error: 'Corpo do webhook inválido'},
      {status: 400},
    )
  }

  if (
    !payload ||
    typeof payload !== 'object' ||
    !('_type' in payload) ||
    (payload._type !== 'product' && payload._type !== 'category')
  ) {
    return NextResponse.json(
      {error: 'Tipo de documento não suportado'},
      {status: 400},
    )
  }

  revalidateTag('sanity')

  return NextResponse.json({revalidated: true})
}
