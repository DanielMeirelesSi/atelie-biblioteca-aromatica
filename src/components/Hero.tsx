import Image from "next/image";
import { siteConfig, whatsappMessages } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";

const description =
  "Sabonetes, velas e aromas artesanais criados para transformar pequenos momentos da rotina em capítulos de cuidado, aconchego e bem-estar.";

export default function Hero() {
  const orderHref = buildWhatsAppUrl(whatsappMessages.customOrder);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-white to-cream pt-24 sm:pt-28"
    >
      <div className="mx-auto max-w-content px-5 pb-16 sm:px-6 sm:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/brand/logo.png"
              alt={siteConfig.name}
              width={1189}
              height={917}
              priority
              className="h-auto w-[220px] sm:w-[260px] md:w-[330px]"
            />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/75">{description}</p>
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-plum px-7 py-3.5 text-base font-medium text-white shadow-card transition-colors hover:bg-plum-light"
              >
                Ver catálogo
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center justify-center gap-2 rounded-full border border-plum/25 bg-white px-6 py-3.5 text-base font-medium text-plum transition-colors hover:border-plum/50 sm:inline-flex"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Fazer uma encomenda
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[210px] md:max-w-[400px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-plum/15 bg-white shadow-card">
              <Image
                src="/brand/hero-foto.jpeg"
                alt="Produtos artesanais do Ateliê Biblioteca Aromática"
                fill
                sizes="(max-width: 768px) 240px, 460px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
