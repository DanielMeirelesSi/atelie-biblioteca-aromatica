import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { buildProductWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export default function ProductCard({ product }: { product: Product }) {
  const whatsappHref = buildProductWhatsAppUrl(product);
  const unavailable = product.available === false;

  return (
    <article className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-plum/10 bg-white shadow-card transition-shadow duration-200 active:shadow-card-hover md:hover:shadow-card-hover">
      <Link
        href={`/produto/${product.slug}`}
        aria-label={`Ver detalhes de ${product.name}`}
        className="flex flex-col after:absolute after:inset-0 after:z-0 after:content-['']"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-cream">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
            className="object-cover transition-transform duration-300 md:group-hover:scale-[1.03]"
          />
          {product.isKit && (
            <span className="absolute left-2 top-2 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Kit
            </span>
          )}
          {unavailable && (
            <span className="absolute right-2 top-2 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Sob encomenda
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-plum-light">
            {product.type}
            {product.weight ? ` · ${product.weight}` : ""}
          </p>
          <h3 className="mt-1 line-clamp-2 font-display text-[15px] font-semibold leading-snug text-ink sm:text-base">
            {product.name}
          </h3>
          <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-ink/60">
            {product.shortDescription}
          </p>

          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-display text-xl font-bold text-plum sm:text-2xl">
              {formatPrice(product.price)}
            </span>
            {product.presentationPrice && (
              <span className="text-[11px] text-ink/50">
                · {formatPrice(product.presentationPrice)} presenteável
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="relative z-10 px-3 pb-3 sm:px-4 sm:pb-4">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-plum px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-plum-light"
          aria-label={`Pedir ${product.name} no WhatsApp`}
        >
          <WhatsAppIcon className="h-4 w-4" />
          Quero este
        </a>
      </div>
    </article>
  );
}
