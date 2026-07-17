import { siteConfig } from "@/data/config";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";

export function buildWhatsAppUrl(
  message: string,
  phone: string = siteConfig.contact.whatsapp,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function productUrl(slug: string): string {
  return `${siteConfig.url}/produto/${slug}`;
}

export function buildProductWhatsAppUrl(product: Product): string {
  const link = productUrl(product.slug);
  const message =
    `Olá, ${siteConfig.owner.firstName}! Vi o produto ${product.name} no catálogo do ${siteConfig.name} e tenho interesse em fazer um pedido.\n\n` +
    `Produto: ${product.name}\n` +
    `Preço: ${formatPrice(product.price)}\n` +
    `Link: ${link}\n\n` +
    `Poderia me passar mais informações sobre disponibilidade e entrega?`;

  return buildWhatsAppUrl(message);
}
