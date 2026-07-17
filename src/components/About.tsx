import { siteConfig, whatsappMessages } from "@/data/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import SectionHeading from "@/components/SectionHeading";

const erikaPhotos = [
  { src: "/brand/erika-2.jpeg", alt: `${siteConfig.owner.name}, criadora do ${siteConfig.name}` },
  { src: "/brand/erika-3.jpeg", alt: `${siteConfig.owner.name} e os produtos do ${siteConfig.name}` },
  { src: "/brand/erika-4.jpeg", alt: `Bastidores do ${siteConfig.name}` },
  { src: "/brand/erika-5.jpeg", alt: `${siteConfig.owner.name} produzindo no ateliê` },
  { src: "/brand/erika-6.jpeg", alt: `${siteConfig.owner.name} no ateliê` },
];

export default function About() {
  const href = buildWhatsAppUrl(whatsappMessages.about);

  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden py-14 sm:py-20">
      <Image
        src="/brand/potes-lavanda.png"
        alt=""
        width={678}
        height={967}
        className="pointer-events-none absolute -right-4 bottom-0 hidden w-24 opacity-60 lg:block"
      />
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionHeading script="por trás do" title="Ateliê" className="mb-10" />

        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.05fr] md:gap-14">
          <div className="mx-auto w-full max-w-sm md:max-w-none">
            <Carousel images={erikaPhotos} />
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-plum sm:text-3xl">
              Oi, eu sou a {siteConfig.owner.firstName}!
            </h3>

            <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
              Sou a pessoa por trás do Ateliê Biblioteca Aromática. Sempre gostei de
              livros, músicas antigas, aromas gostosos e de tudo aquilo que deixa a vida
              um pouco mais leve e acolhedora.
            </p>

            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Foi no trabalho artesanal que encontrei uma forma de desacelerar, cuidar de
              mim e transformar esse carinho em algo que também pudesse chegar até outras
              pessoas.
            </p>

            <p className="mt-3 text-[15px] leading-relaxed text-ink/75">
              Cada sabonete, vela e aroma é feito com muito cuidado, pensando em tornar os
              pequenos momentos do dia mais especiais. Espero que você se sinta acolhido
              por aqui e encontre um pouquinho desse carinho em cada produto.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-plum/25 bg-white px-6 py-3.5 text-base font-medium text-plum transition-colors hover:border-plum/50"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale comigo no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
