import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getProductBySlug, categoryLabel } from "@/data/products";
import { siteConfig } from "@/data/config";
import { formatPrice } from "@/lib/format";
import { buildProductWhatsAppUrl, productUrl } from "@/lib/whatsapp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Produto não encontrado" };
  }

  const description = `${product.shortDescription} A partir de ${formatPrice(product.price)}.`;

  return {
    title: product.name,
    description,
    openGraph: {
      type: "website",
      title: `${product.name} | ${siteConfig.name}`,
      description,
      url: productUrl(product.slug),
      images: [
        {
          url: product.image,
          width: 1000,
          height: 1000,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description,
      images: [product.image],
    },
    alternates: {
      canonical: productUrl(product.slug),
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const whatsappHref = buildProductWhatsAppUrl(product);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription ?? product.shortDescription,
    image: `${siteConfig.url}${product.image}`,
    category: categoryLabel[product.category],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "BRL",
      availability:
        product.available === false
          ? "https://schema.org/PreOrder"
          : "https://schema.org/InStock",
      url: productUrl(product.slug),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-content px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
        <Link
          href="/#catalogo"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-plum/20 bg-white px-4 py-2 text-sm font-medium text-plum transition-colors hover:border-plum/45"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          Voltar ao catálogo
        </Link>

        <nav aria-label="Você está aqui" className="mb-6 text-sm text-ink/55">
          <Link href="/" className="transition-colors hover:text-plum">
            Início
          </Link>
          <span className="px-1.5">/</span>
          <Link href="/#catalogo" className="transition-colors hover:text-plum">
            Catálogo
          </Link>
          <span className="px-1.5">/</span>
          <span className="text-ink/80">{product.name}</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-plum/10 bg-white shadow-card">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 92vw, 560px"
              className="object-cover"
            />
            {product.isKit && (
              <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Kit
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.24em] text-plum-light">
              {categoryLabel[product.category]}
              {product.weight ? ` · ${product.weight}` : ""}
            </p>
            <h1 className="mt-2 font-display text-2xl leading-tight text-plum sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-plum">
                {formatPrice(product.price)}
              </span>
              {product.presentationPrice && (
                <span className="text-sm text-ink/55">
                  · {formatPrice(product.presentationPrice)} com embalagem presenteável
                </span>
              )}
            </div>

            {product.priceNote && (
              <p className="mt-1.5 text-sm text-ink/55">{product.priceNote}</p>
            )}

            <p className="mt-5 text-[15px] leading-relaxed text-ink/75">
              {product.fullDescription ?? product.shortDescription}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-plum/10 bg-white px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Tipo</dt>
                <dd className="mt-0.5 text-ink/80">{product.type}</dd>
              </div>
              <div className="rounded-xl border border-plum/10 bg-white px-4 py-3">
                <dt className="text-xs uppercase tracking-wide text-ink/45">Fragrância</dt>
                <dd className="mt-0.5 text-ink/80">{product.fragrance}</dd>
              </div>
            </dl>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-plum px-7 py-4 text-base font-medium text-white shadow-card transition-colors hover:bg-plum-light"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir no WhatsApp
            </a>

            <Link
              href="/#catalogo"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-plum transition-colors hover:text-plum-light"
            >
              Ver mais produtos
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
