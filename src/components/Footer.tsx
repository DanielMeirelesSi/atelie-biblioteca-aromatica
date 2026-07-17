import Image from "next/image";
import { siteConfig, whatsappMessages } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  WhatsAppIcon,
  InstagramIcon,
  ArrowRightIcon,
} from "@/components/icons";

export default function Footer() {
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  const developerWhatsappHref = buildWhatsAppUrl(
    whatsappMessages.developer,
    siteConfig.developer.whatsapp,
  );

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-plum/10 bg-cream">
      <Image
        src="/brand/vela-pote.png"
        alt=""
        width={648}
        height={998}
        className="pointer-events-none absolute -bottom-2 right-3 hidden w-16 opacity-70 sm:block"
      />

      <div className="mx-auto flex max-w-content flex-col items-center gap-5 px-4 py-12 text-center sm:px-6">
        <Image
          src="/brand/logo-mark.png"
          alt={siteConfig.name}
          width={1168}
          height={771}
          className="h-16 w-auto"
        />

        <p className="font-display text-sm italic text-plum-light">
          {siteConfig.tagline}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-plum/10 text-plum transition-colors hover:bg-plum hover:text-white"
            aria-label="WhatsApp do Ateliê Biblioteca Aromática"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-plum/10 text-plum transition-colors hover:bg-plum hover:text-white"
            aria-label="Instagram do Ateliê Biblioteca Aromática"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-2 text-xs text-ink/50">
          <p>
            Produtos artesanais feitos com cuidado por{" "}
            {siteConfig.owner.name}.
          </p>

          <p className="mt-1">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
        </div>

        <div className="mt-6 w-full border-t border-plum/10 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
            <p className="text-xs text-ink/55">
              Desenvolvido por{" "}
              <a
                href={siteConfig.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-plum underline decoration-plum/30 underline-offset-2 transition-colors hover:decoration-plum"
              >
                {siteConfig.developer.name}
              </a>
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <p className="text-xs text-ink/55">
                {siteConfig.developer.pitch}
              </p>

              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.developer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-plum/20 px-4 py-2 text-xs font-medium text-plum transition-colors hover:border-plum/45"
                >
                  {siteConfig.developer.portfolioCta}
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={developerWhatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-plum/10 px-4 py-2 text-xs font-medium text-plum transition-colors hover:bg-plum hover:text-white"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  {siteConfig.developer.whatsappCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}