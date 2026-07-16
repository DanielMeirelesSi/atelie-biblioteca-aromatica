import { siteConfig, whatsappMessages } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <section id="contato" className="scroll-mt-24 bg-gradient-to-b from-cream to-lilac/25 py-14 sm:py-20">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading script="fale com o" title="Ateliê" />

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-plum/10 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-plum/10 text-plum">
              <WhatsAppIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-ink/50">WhatsApp</span>
              <span className="block font-medium text-ink">{siteConfig.contact.whatsappDisplay}</span>
            </span>
          </a>

          <a
            href={siteConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-plum/10 bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-plum/10 text-plum">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-ink/50">Instagram</span>
              <span className="block font-medium text-ink">@{siteConfig.contact.instagram}</span>
            </span>
          </a>
        </div>

        <dl className="mx-auto mt-4 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-plum/10 bg-white p-5">
            <dt className="text-xs uppercase tracking-wide text-ink/50">Atendimento</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink/80">
              {siteConfig.serviceInfo.hours}
            </dd>
          </div>
          <div className="rounded-2xl border border-plum/10 bg-white p-5">
            <dt className="text-xs uppercase tracking-wide text-ink/50">Região</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink/80">
              {siteConfig.serviceInfo.region}
            </dd>
          </div>
          <div className="rounded-2xl border border-plum/10 bg-white p-5">
            <dt className="text-xs uppercase tracking-wide text-ink/50">Encomendas</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-ink/80">
              {siteConfig.serviceInfo.ordersNote}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
