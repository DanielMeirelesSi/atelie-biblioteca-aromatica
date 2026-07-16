import { siteConfig, whatsappMessages } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";

export default function CustomOrder() {
  const href = buildWhatsAppUrl(whatsappMessages.customOrder);

  return (
    <section className="py-4">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-plum px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lilac blur-2xl" />
            <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-gold blur-2xl" />
          </div>
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Sob medida</p>
            <h2 className="mx-auto mt-3 max-w-lg font-display text-2xl leading-snug text-white sm:text-3xl">
              Quer fazer uma encomenda personalizada?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
              Conte para a {siteConfig.owner.firstName} o que você está imaginando. O{" "}
              {siteConfig.name} prepara opções para presentes, lembranças, datas especiais e
              momentos únicos.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-plum transition-colors hover:bg-cream"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
