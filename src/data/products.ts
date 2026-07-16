export type CategoryId =
  | "sabonetes-artesanais"
  | "sabonetes-massageadores"
  | "velas-aromaticas"
  | "aromatizadores"
  | "sprays"
  | "kits";

export interface Category {
  id: CategoryId;
  label: string;
  chip: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  type: string;
  fragrance: string;
  price: number;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  available?: boolean;
  weight?: string;
  presentationPrice?: number;
  priceNote?: string;
  isKit?: boolean;
}

export const categories: Category[] = [
  { id: "sabonetes-artesanais", label: "Sabonetes artesanais", chip: "Sabonetes" },
  { id: "sabonetes-massageadores", label: "Sabonetes massageadores", chip: "Massageadores" },
  { id: "velas-aromaticas", label: "Velas aromáticas", chip: "Velas" },
  { id: "aromatizadores", label: "Aromatizadores de varetas", chip: "Aromatizadores" },
  { id: "sprays", label: "Spray aromatizante", chip: "Sprays" },
  { id: "kits", label: "Kits prontos", chip: "Kits" },
];

export const categoryLabel: Record<CategoryId, string> = categories.reduce(
  (acc, c) => ({ ...acc, [c.id]: c.label }),
  {} as Record<CategoryId, string>,
);

export const products: Product[] = [
  {
    id: "sab-mousse-melancia",
    slug: "sabonete-mini-mousse-melancia",
    name: "Sabonete Mini Mousse de Melancia",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Melancia",
    price: 5,
    shortDescription:
      "Com manteiga de karité e extrato de calêndula, oferece limpeza suave, boa espumação e hidratação.",
    fullDescription:
      "Com manteiga de karité e extrato de calêndula, proporciona limpeza suave, boa espumação e hidratação. Seu formato mini encantador é perfeito para presentear ou compor kits de autocuidado.",
    image: "/produtos/sabonete-mousse-melancia.png",
    imageAlt: "Sabonete artesanal mini mousse com aroma de melancia",
    featured: true,
    available: true,
  },
  {
    id: "sab-melancia-90g",
    slug: "sabonete-melancia-90g",
    name: "Sabonete de Melancia 90 g",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Melancia",
    price: 10,
    presentationPrice: 12,
    weight: "90 g",
    shortDescription:
      "Refrescante e delicadamente perfumado, com espuma cremosa que limpa sem ressecar a pele.",
    fullDescription:
      "Refrescante e delicadamente perfumado, proporciona uma espuma cremosa que limpa sem ressecar a pele. Sua fórmula com manteiga de karité ajuda a manter a hidratação natural, deixando a pele macia, suave e com agradável sensação de frescor. Disponível também com embalagem presenteável.",
    image: "/produtos/sabonete-melancia.jpeg",
    imageAlt: "Sabonete artesanal de melancia de 90 gramas",
    featured: true,
    available: true,
  },
  {
    id: "sab-erva-doce",
    slug: "sabonete-erva-doce-90g",
    name: "Sabonete de Erva-Doce 90 g",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Erva-doce",
    price: 10,
    weight: "90 g",
    shortDescription:
      "Com extrato de erva-doce, propriedades calmantes e uma esfoliação suave que renova a pele.",
    fullDescription:
      "Enriquecido com extrato de erva-doce, conhecido por suas propriedades calmantes e suavizantes, este sabonete proporciona uma limpeza delicada, ajudando a manter a pele macia, hidratada e com uma agradável sensação de frescor. As folhas de erva-doce desidratadas presentes na fórmula promovem uma esfoliação suave, auxiliando na remoção das células mortas, renovando a pele e deixando-a mais lisa e sedosa.",
    image: "/produtos/sabonete-erva_doce.jpeg",
    imageAlt: "Sabonete artesanal verde de erva-doce",
    available: true,
  },
  {
    id: "sab-dolomita",
    slug: "sabonete-dolomita-90g",
    name: "Sabonete de Dolomita 90 g",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Dolomita",
    price: 12,
    weight: "90 g",
    shortDescription:
      "Mineral rico em cálcio e magnésio. Ajuda a controlar a oleosidade e deixa toque aveludado.",
    fullDescription:
      "A dolomita é um mineral natural rico em cálcio e magnésio, muito utilizada em cosméticos por suas propriedades suavizantes e purificantes. Ajuda a controlar a oleosidade, promove uma limpeza delicada, deixa a pele macia e com toque aveludado e proporciona sensação de frescor e bem-estar.",
    image: "/produtos/sabonete-dolomita.jpeg",
    imageAlt: "Sabonetes brancos de dolomita",
    available: true,
  },
  {
    id: "sab-alecrim",
    slug: "sabonete-alecrim",
    name: "Sabonete de Alecrim",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Alecrim",
    price: 12,
    shortDescription:
      "Limpeza revigorante com esfoliação suave. Aroma herbal que renova a pele e refresca o banho.",
    fullDescription:
      "Enriquecido com extrato de alecrim e erva de alecrim desidratada, este sabonete proporciona uma limpeza revigorante e uma esfoliação suave, ajudando a remover as células mortas e deixando a pele mais macia e renovada. O extrato de alecrim contribui para a sensação de frescor e cuidado com a pele, enquanto sua espuma cremosa e seu aroma herbal tornam o banho ainda mais agradável.",
    image: "/produtos/sabonete-alecrim.jpeg",
    imageAlt: "Sabonete artesanal verde de alecrim",
    available: true,
  },
  {
    id: "sab-camomila",
    slug: "sabonete-camomila",
    name: "Sabonete de Camomila",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Camomila",
    price: 12,
    shortDescription:
      "Ação calmante ideal para peles sensíveis. Karité e camomila para um toque sedoso.",
    fullDescription:
      "Enriquecido com extrato de camomila e manteiga de karité, este sabonete limpa delicadamente enquanto ajuda a manter a pele hidratada e macia. A camomila possui ação calmante e suavizante, sendo ideal para peles sensíveis ou ressecadas. A manteiga de karité auxilia na nutrição da pele, proporcionando toque sedoso e uma espuma cremosa com perfume delicado.",
    image: "/produtos/sabonete-camomila.jpeg",
    imageAlt: "Sabonetes artesanais de camomila",
    available: true,
  },
  {
    id: "sab-amendoas",
    slug: "sabonete-amendoas",
    name: "Sabonete de Amêndoas",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Amêndoas",
    price: 12,
    shortDescription:
      "Óleo de amêndoas que nutre e preserva a hidratação. Limpeza suave e perfumada.",
    fullDescription:
      "Enriquecido com extrato de amêndoas e óleo de amêndoas, este sabonete promove uma limpeza suave, deixando a pele macia, hidratada e perfumada. O óleo de amêndoas ajuda a nutrir e preservar a hidratação natural da pele, enquanto o extrato de amêndoas contribui para uma sensação de suavidade e cuidado. Produz uma espuma cremosa e um perfume delicado.",
    image: "/produtos/sabonete-amendoas.jpeg",
    imageAlt: "Sabonetes artesanais de amêndoas",
    available: true,
  },
  {
    id: "sab-arnica-barbatimao",
    slug: "sabonete-arnica-barbatimao",
    name: "Sabonete de Arnica e Barbatimão",
    category: "sabonetes-artesanais",
    type: "Sabonete fitoterápico",
    fragrance: "Arnica e Barbatimão",
    price: 15,
    shortDescription:
      "Fitoterápico com arnica e barbatimão. Propriedades calmantes e adstringentes para a pele.",
    fullDescription:
      "Enriquecido com extrato de arnica e extrato de barbatimão, este sabonete fitoterápico promove uma limpeza suave enquanto proporciona uma sensação de cuidado e conforto para a pele. A arnica é conhecida por suas propriedades calmantes, enquanto o barbatimão é tradicionalmente utilizado por suas propriedades adstringentes e auxilia na manutenção da saúde da pele.",
    image: "/produtos/sabonete-arnica_barbatimao.jpeg",
    imageAlt: "Sabonete fitoterápico de arnica e barbatimão com embalagem",
    available: true,
  },
  {
    id: "sab-lavanda",
    slug: "sabonete-lavanda",
    name: "Sabonete de Lavanda",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Lavanda",
    price: 12,
    shortDescription:
      "Extrato de lavanda e karité com esfoliação delicada. Conforto e bem-estar no banho.",
    fullDescription:
      "Enriquecido com extrato de lavanda, manteiga de karité e lavanda desidratada, este sabonete proporciona uma limpeza suave com uma esfoliação delicada, ajudando a remover as células mortas e deixando a pele macia e renovada. A manteiga de karité auxilia na hidratação e nutrição da pele, enquanto o extrato de lavanda promove uma agradável sensação de conforto e bem-estar.",
    image: "/produtos/sabonete-lavanda.jpeg",
    imageAlt: "Sabonete artesanal roxo de lavanda",
    featured: true,
    available: true,
  },
  {
    id: "sab-uva",
    slug: "sabonete-uva",
    name: "Sabonete de Uva",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Uva",
    price: 12,
    shortDescription:
      "Rico em antioxidantes, com óleo de semente de uva que protege e nutre a pele.",
    fullDescription:
      "Enriquecido com extrato de uva e óleo de semente de uva, este sabonete promove uma limpeza suave, deixando a pele macia, hidratada e delicadamente perfumada. O extrato de uva é rico em compostos antioxidantes, que ajudam a proteger a pele contra os efeitos dos radicais livres, enquanto o óleo de semente de uva auxilia na hidratação e nutrição da pele, proporcionando um toque suave e sedoso.",
    image: "/produtos/sabonete-uva.jpeg",
    imageAlt: "Sabonete artesanal de uva",
    available: true,
  },
  {
    id: "sab-vinho-cabernet",
    slug: "sabonete-coracao-vinho-cabernet",
    name: "Sabonete Coração de Vinho Cabernet",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Vinho Cabernet",
    price: 12,
    shortDescription:
      "Essência sofisticada de vinho cabernet. Espuma cremosa e fragrância marcante e elegante.",
    fullDescription:
      "Com uma sofisticada essência de vinho cabernet, este sabonete proporciona uma limpeza suave, deixando a pele delicadamente perfumada. Sua espuma cremosa e abundante torna o banho ainda mais agradável, enquanto sua fragrância marcante e elegante oferece uma experiência de cuidado e bem-estar.",
    image: "/produtos/sabonete-vinho.jpeg",
    imageAlt: "Sabonete em formato de coração com essência de vinho cabernet",
    available: true,
  },
  {
    id: "sab-tutti-frutti",
    slug: "sabonete-coracao-tutti-frutti",
    name: "Sabonete Coração de Tutti Frutti",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Tutti Frutti",
    price: 12,
    priceNote: "Versão mini mousse por R$ 5,00.",
    shortDescription:
      "Fragrância doce e alegre de tutti frutti. Espuma cremosa que deixa a pele macia.",
    fullDescription:
      "Com uma deliciosa fragrância de tutti frutti, este sabonete proporciona uma limpeza suave e uma espuma cremosa e abundante, deixando a pele macia e delicadamente perfumada. Seu aroma doce e alegre transforma o banho em um momento leve e prazeroso. Também disponível na versão mini mousse.",
    image: "/produtos/sabonete-tuttifrutti.jpeg",
    imageAlt: "Sabonete em formato de coração de tutti frutti",
    available: true,
  },
  {
    id: "sab-alecrim-salvia",
    slug: "sabonete-alecrim-salvia",
    name: "Sabonete de Alecrim e Sálvia",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Alecrim e Sálvia",
    price: 10,
    priceNote: "Versão massageador por R$ 20,00 e massageador com ducha vegetal por R$ 22,00.",
    shortDescription:
      "Alecrim e sálvia numa combinação revitalizante. Limpeza suave com sensação de frescor.",
    fullDescription:
      "Enriquecido com extrato de alecrim e extrato de sálvia, este sabonete proporciona uma limpeza suave, deixando a pele macia, perfumada e com uma agradável sensação de frescor. A combinação desses extratos vegetais promove uma sensação revitalizante durante o banho. Disponível também nas versões massageador e massageador com ducha vegetal.",
    image: "/produtos/sabonete-alecrim_salvia.jpeg",
    imageAlt: "Sabonete artesanal de alecrim e sálvia",
    available: true,
  },
  {
    id: "sab-mousse-maracuja",
    slug: "sabonete-mini-mousse-maracuja",
    name: "Sabonete Mini Mousse de Maracujá",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Maracujá",
    price: 5,
    shortDescription:
      "Extrato de maracujá com espuma cremosa. Formato encantador, perfeito para presentear.",
    fullDescription:
      "Com extrato de maracujá, promove uma limpeza suave e uma espuma cremosa, deixando a pele macia, hidratada e delicadamente perfumada. Seu formato encantador é perfeito para presentear ou tornar o autocuidado ainda mais especial.",
    image: "/produtos/sabonete-mousse-maracuja.jpeg",
    imageAlt: "Sabonete mini mousse de maracujá",
    available: true,
  },
  {
    id: "sab-maracuja-90g",
    slug: "sabonete-maracuja-90g",
    name: "Sabonete de Maracujá 90 g",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Maracujá",
    price: 10,
    presentationPrice: 12,
    weight: "90 g",
    shortDescription:
      "Limpeza suave e ação calmante. Espuma cremosa que deixa a pele limpa e perfumada.",
    fullDescription:
      "Enriquecido com extrato de maracujá, proporciona uma limpeza suave e ação calmante para a pele, com uma espuma cremosa que deixa a pele limpa, macia e delicadamente perfumada. Sua fórmula auxilia no cuidado da pele, oferecendo uma agradável sensação de conforto e bem-estar. Disponível também com embalagem presenteável.",
    image: "/produtos/sabonete-maracuja.png",
    imageAlt: "Sabonetes artesanais de maracujá de 90 gramas",
    available: true,
  },
  {
    id: "sab-pitaya",
    slug: "sabonetes-pitaya",
    name: "Sabonetes de Pitaya",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Pitaya",
    price: 10,
    priceNote: "Versão mini mousse por R$ 5,00.",
    shortDescription:
      "Extrato de pitaya com propriedades antioxidantes e hidratantes. Pele macia e revitalizada.",
    fullDescription:
      "Disponíveis nas versões 90 g e mini mousse, nossos sabonetes são enriquecidos com extrato de pitaya, conhecido por suas propriedades antioxidantes e hidratantes, que ajudam a manter a pele macia, saudável e com aspecto revitalizado.",
    image: "/produtos/sabonete-pitaya.jpeg",
    imageAlt: "Sabonetes artesanais de pitaya",
    available: true,
  },
  {
    id: "sab-jasmim",
    slug: "coracoes-jasmim-90g",
    name: "Corações de Jasmim 90 g",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Jasmim",
    price: 10,
    presentationPrice: 12,
    weight: "90 g",
    shortDescription:
      "Fragrância suave de jasmim e manteiga de karité. Espuma cremosa que mantém a pele hidratada.",
    fullDescription:
      "Sabonete artesanal em formato de coração, com espuma cremosa, fragrância suave de jasmim e fórmula enriquecida com manteiga de karité, que ajuda a manter a pele macia e hidratada. Seu formato traz um charme especial, perfeito para presentear ou transformar a rotina de cuidados em um momento de carinho. Disponível também com embalagem presenteável.",
    image: "/produtos/sabonete-jasmim.jpeg",
    imageAlt: "Sabonetes em formato de coração com fragrância de jasmim",
    available: true,
  },
  /*{
    id: "sab-fatia-bolo",
    slug: "sabonete-fatia-de-bolo-tutti-frutti",
    name: "Sabonete Fatia de Bolo de Tutti Frutti",
    category: "sabonetes-artesanais",
    type: "Sabonete artesanal",
    fragrance: "Tutti Frutti",
    price: 12,
    shortDescription:
      "Três camadas inspiradas numa fatia de bolo. Peça decorativa e excelente opção de presente.",
    fullDescription:
      "Inspirado em uma deliciosa fatia de bolo, este sabonete artesanal possui três camadas, unindo beleza e um acabamento encantador. Com uma agradável fragrância de tutti frutti, proporciona uma limpeza suave, espuma cremosa e abundante, deixando a pele macia e delicadamente perfumada. Além de funcional, é uma peça decorativa e uma excelente opção para presentear.",
    image: "/produtos/sabonete-fatia-bolo.jpeg",
    imageAlt: "Sabonete artesanal em formato de fatia de bolo",
    available: true,
  },*/
  {
    id: "mas-melancia",
    slug: "sabonete-massageador-melancia",
    name: "Sabonete Massageador de Melancia",
    category: "sabonetes-massageadores",
    type: "Sabonete massageador",
    fragrance: "Melancia",
    price: 20,
    shortDescription:
      "Massagem suave enquanto limpa. Fórmula com karité e calêndula que hidrata e nutre a pele.",
    fullDescription:
      "Ideal para proporcionar uma massagem suave enquanto auxilia na limpeza da pele. Sua fórmula contém manteiga de karité e extrato de calêndula, que ajudam a hidratar, nutrir e deixar a pele macia, além de formar uma espuma cremosa e ter um delicioso aroma de melancia.",
    image: "/produtos/sabonete-massageador-melancia.jpeg",
    imageAlt: "Sabonetes massageadores em formato de melancia",
    available: true,
  },
  {
    id: "mas-maracuja",
    slug: "sabonete-massageador-maracuja",
    name: "Sabonete Massageador de Maracujá",
    category: "sabonetes-massageadores",
    type: "Sabonete massageador",
    fragrance: "Maracujá",
    price: 20,
    shortDescription:
      "Formato anatômico que auxilia no relaxamento muscular. Espuma cremosa e limpeza suave.",
    fullDescription:
      "Enriquecido com extrato de maracujá, une os benefícios da massagem ao cuidado diário da pele. Seu formato anatômico auxilia no relaxamento muscular enquanto a espuma cremosa promove uma limpeza suave, deixando a pele macia e delicadamente perfumada.",
    image: "/produtos/sabonete-massageador-maracuja.jpeg",
    imageAlt: "Sabonete massageador de maracujá",
    available: true,
  },
  {
    id: "mas-cereja-avela",
    slug: "sabonete-massageador-bucha-cereja-avela",
    name: "Sabonete Massageador com Bucha Vegetal de Cereja com Avelã",
    category: "sabonetes-massageadores",
    type: "Sabonete massageador",
    fragrance: "Cereja com Avelã",
    price: 22,
    shortDescription:
      "Bucha vegetal natural com fragrância de cereja e avelã. Esfoliação suave e banho revigorante.",
    fullDescription:
      "Com a irresistível fragrância de cereja com avelã, este sabonete massageador possui bucha vegetal natural, que promove uma esfoliação suave, auxiliando na remoção das células mortas e deixando a pele mais macia e renovada. Sua espuma cremosa e abundante proporciona uma limpeza delicada, enquanto o formato massageador torna o banho ainda mais relaxante e revigorante. Ideal para incluir na rotina de autocuidado.",
    image: "/produtos/sabonete-massageador-cereja_avela.jpeg",
    imageAlt: "Sabonete massageador com bucha vegetal de cereja e avelã",
    available: true,
  },
  /*{
    id: "vela-poema-lavanda",
    slug: "vela-poema-de-lavanda-40ml",
    name: "Poema de Lavanda, Vela Aromática 40 ml",
    category: "velas-aromaticas",
    type: "Vela aromática",
    fragrance: "Lavanda",
    price: 15,
    weight: "40 ml",
    shortDescription:
      "Fragrância suave e acolhedora de lavanda. Transforma o ambiente num refúgio de tranquilidade.",
    fullDescription:
      "Com uma fragrância suave, delicada e acolhedora, a Poema de Lavanda transforma qualquer ambiente em um refúgio de tranquilidade. Seu aroma agradável envolve o espaço de forma leve, proporcionando uma sensação de conforto, relaxamento e bem-estar. Perfeita para momentos de leitura, descanso, meditação ou para deixar seu cantinho ainda mais aconchegante.",
    image: "/produtos/vela-poema-lavanda.jpeg",
    imageAlt: "Vela aromática de lavanda em pote de vidro",
    featured: true,
    available: true,
  },*/
  {
    id: "vela-cafe",
    slug: "vela-aromatica-cafe",
    name: "Vela Aromática de Café",
    category: "velas-aromaticas",
    type: "Vela aromática",
    fragrance: "Café",
    price: 30,
    shortDescription:
      "Aroma marcante de café recém-passado. Ambiente aconchegante para leitura e trabalho.",
    fullDescription:
      "O aroma marcante do café recém-passado desperta os sentidos e traz uma sensação acolhedora e familiar. Perfeita para criar um ambiente aconchegante, ela combina conforto e energia na medida certa. Ideal para acompanhar a leitura, o trabalho ou aquele café da manhã tranquilo, sua fragrância envolve o ambiente com um perfume quente, agradável e convidativo. Uma vela que transforma qualquer cantinho em um lugar de conforto, inspiração e boas lembranças.",
    image: "/produtos/vela-cafe.jpeg",
    imageAlt: "Velas aromáticas com aroma de café",
    available: true,
  },
  {
    id: "vela-massagem-lavanda",
    slug: "vela-de-massagem-lavanda-40ml",
    name: "Vela de Massagem de Lavanda 40 ml",
    category: "velas-aromaticas",
    type: "Vela de massagem",
    fragrance: "Lavanda",
    price: 25,
    weight: "40 ml",
    shortDescription:
      "A cera derrete num óleo morno para massagem relaxante. Karité, cera de coco e murumuru.",
    fullDescription:
      "Mais do que uma vela, um momento de autocuidado. Ao acender, sua cera se transforma em um óleo morno e agradável, ideal para uma massagem relaxante, deixando a pele profundamente hidratada e perfumada. Sua fórmula é rica em ingredientes que nutrem e cuidam da pele: manteiga de karité, cera de coco, manteiga de murumuru, óleo de aloe vera, óleo de amêndoas e fragrância de lavanda suave.",
    image: "/produtos/vela-massagem-lavanda.jpeg",
    imageAlt: "Vela de massagem de lavanda em pote de vidro",
    available: true,
  },
  {
    id: "vela-baunilha",
    slug: "vela-contos-a-luz-de-velas-baunilha-120ml",
    name: "Contos à Luz de Velas, Baunilha 120 ml",
    category: "velas-aromaticas",
    type: "Vela aromática",
    fragrance: "Baunilha",
    price: 30,
    weight: "120 ml",
    shortDescription:
      "Doçura suave da baunilha num aroma acolhedor e reconfortante. Aquece o ambiente e o coração.",
    fullDescription:
      "Uma fragrância acolhedora e envolvente, que une a doçura suave da baunilha a um aroma agradável e reconfortante. Perfeita para transformar o ambiente e aquecer o coração.",
    image: "/produtos/vela-baunilha.png",
    imageAlt: "Vela aromática de baunilha acesa em pote de vidro",
    featured: true,
    available: true,
  },
  {
    id: "arom-flor-laranjeira",
    slug: "aromatizador-flor-de-laranjeira",
    name: "Aromatizador de Flor de Laranjeira",
    category: "aromatizadores",
    type: "Aromatizador de varetas",
    fragrance: "Flor de Laranjeira",
    price: 30,
    weight: "250 ml",
    priceNote: "40 ml por R$ 10,00, 100 ml por R$ 20,00 e 250 ml por R$ 30,00.",
    shortDescription:
      "Fragrância floral delicada e refrescante. Ideal para quartos, salas e ambientes de descanso.",
    fullDescription:
      "Uma fragrância floral delicada e refrescante, com notas suaves que transmitem leveza, tranquilidade e sensação de bem-estar. Ideal para quartos, salas e ambientes de descanso. Disponível em 40 ml por R$ 10,00, ideal para lavabos e cômodos pequenos, 100 ml por R$ 20,00, perfeito para quartos e salas de tamanho médio, e 250 ml por R$ 30,00, indicado para ambientes maiores e perfumação por mais tempo.",
    image: "/produtos/aromatizador-flordelaranjeira.jpeg",
    imageAlt: "Aromatizador de varetas com fragrância de flor de laranjeira",
    featured: true,
    available: true,
  },
  {
    id: "arom-limao-bamboo",
    slug: "aromatizador-limao-siciliano-bamboo",
    name: "Aromatizador de Limão Siciliano e Bambu",
    category: "aromatizadores",
    type: "Aromatizador de varetas",
    fragrance: "Limão Siciliano e Bambu",
    price: 30,
    weight: "250 ml",
    priceNote: "40 ml por R$ 10,00, 100 ml por R$ 20,00 e 250 ml por R$ 30,00.",
    shortDescription:
      "Frescor cítrico do limão siciliano com a suavidade do bambu. Sofisticado e revigorante.",
    fullDescription:
      "A combinação perfeita entre o frescor cítrico do limão siciliano e a suavidade do bambu. Um aroma sofisticado, leve e revigorante, ideal para deixar os ambientes sempre perfumados. Disponível em 40 ml por R$ 10,00, ideal para lavabos e cômodos pequenos, 100 ml por R$ 20,00, perfeito para quartos e salas de tamanho médio, e 250 ml por R$ 30,00, indicado para ambientes maiores e perfumação por mais tempo.",
    image: "/produtos/aromatizador-limaosiciliano_bambu.jpeg",
    imageAlt: "Aromatizador de varetas com fragrância de limão siciliano e bambu",
    available: true,
  },
  {
    id: "spray-lencol-baunilha",
    slug: "aromatizador-de-lencois-baunilha",
    name: "Aromatizador de Lençóis de Baunilha",
    category: "sprays",
    type: "Spray aromatizante",
    fragrance: "Baunilha",
    price: 10,
    weight: "20 ml",
    shortDescription:
      "Perfuma lençóis, toalhas e tecidos com a suavidade envolvente da baunilha.",
    fullDescription:
      "Perfume delicadamente seus lençóis, toalhas e tecidos com a suavidade envolvente da baunilha. Um aroma aconchegante que proporciona sensação de conforto e cuidado.",
    image: "/produtos/aromatizador-lencol-baunilha.jpeg",
    imageAlt: "Spray aromatizante de lençóis com fragrância de baunilha",
    available: true,
  },
  {
    id: "spray-lencol-cereja-avela",
    slug: "aromatizador-de-lencois-cereja-com-avela",
    name: "Aromatizador de Lençóis de Cereja com Avelã",
    category: "sprays",
    type: "Spray aromatizante",
    fragrance: "Cereja com Avelã",
    price: 10,
    weight: "20 ml",
    shortDescription:
      "Toque adocicado da cereja com a cremosidade da avelã. Aconchego que dura nos tecidos.",
    fullDescription:
      "Uma fragrância marcante e elegante, que une o toque adocicado da cereja à cremosidade da avelã. Ideal para perfumar tecidos e deixar uma sensação agradável de aconchego por mais tempo.",
    image: "/produtos/aromatizador-lencol-cereja_avela.jpeg",
    imageAlt: "Spray aromatizante de lençóis com fragrância de cereja com avelã",
    available: true,
  },
  {
    id: "kit-lavanda",
    slug: "kit-lavanda",
    name: "Kit Lavanda",
    category: "kits",
    type: "Kit de presente",
    fragrance: "Lavanda",
    price: 35,
    isKit: true,
    shortDescription:
      "Momentos de relaxamento com o delicado aroma de lavanda. Perfeito para presentear.",
    fullDescription:
      "Um kit pensado para proporcionar momentos de relaxamento e bem-estar. Com o delicado aroma de lavanda, é perfeito para presentear ou transformar a rotina de autocuidado em um momento especial.",
    image: "/produtos/kit-lavanda.jpeg",
    imageAlt: "Kit de produtos artesanais com aroma de lavanda",
    featured: true,
    available: true,
  },
  {
    id: "kit-sabonete-bebe",
    slug: "kit-sabonete-bebe",
    name: "Kit Sabonete Bebê",
    category: "kits",
    type: "Kit de presente",
    fragrance: "Bebê",
    price: 40,
    isKit: true,
    shortDescription:
      "Fragrância suave inspirada no cheirinho de bebê. Espuma cremosa e sensação de conforto.",
    fullDescription:
      "Sabonetes artesanais com fragrância suave e delicada, inspirados no cheirinho de bebê. Proporcionam uma espuma cremosa e uma sensação de limpeza e conforto, deixando a pele perfumada de forma leve.",
    image: "/produtos/kit-sabonete-bebe.jpeg",
    imageAlt: "Kit de sabonetes artesanais com fragrância de bebê",
    featured: true,
    available: true,
  },
  {
    id: "kit-aromatizadores",
    slug: "kit-aromatizadores",
    name: "Kit Aromatizadores",
    category: "kits",
    type: "Kit de presente",
    fragrance: "Sortido",
    price: 25,
    isKit: true,
    shortDescription:
      "Kit com 3 sprays de 20 ml. Fragrâncias selecionadas para perfumar a casa com elegância.",
    fullDescription:
      "Leve aconchego e personalidade para qualquer ambiente. O kit reúne fragrâncias cuidadosamente selecionadas para perfumar a casa com elegância e criar uma atmosfera agradável e acolhedora. Kit com 3 sprays de 20 ml.",
    image: "/produtos/kit-aromatizadores.jpeg",
    imageAlt: "Kit com três sprays aromatizantes",
    available: true,
  },
  {
    id: "kit-shampoo-barra",
    slug: "kit-shampoo-em-barra",
    name: "Kit Shampoo em Barra",
    category: "kits",
    type: "Kit de presente",
    fragrance: "Hortelã",
    price: 12,
    isKit: true,
    shortDescription:
      "Shampoo em barra para cabelo e barba. Limpa suavemente, perfuma e é prático no dia a dia.",
    fullDescription:
      "Kit com shampoo em barra para cabelo e barba. Limpa suavemente, perfuma os fios e oferece praticidade para a rotina de cuidados masculinos.",
    image: "/produtos/kit-shampoo_em_barra.jpeg",
    imageAlt: "Kit de shampoo em barra para cabelo e barba",
    available: true,
  },
  /*{
    id: "kit-trio-frutado",
    slug: "kit-trio-frutado",
    name: "Kit Trio Frutado de Pitaya, Maracujá e Melancia",
    category: "kits",
    type: "Kit de presente",
    fragrance: "Pitaya, Maracujá e Melancia",
    price: 35,
    isKit: true,
    shortDescription:
      "Três sabonetes artesanais frutados em embalagem presenteável. Espuma cremosa e aromas delicados.",
    fullDescription:
      "Uma combinação de três sabonetes artesanais desenvolvidos para transformar o banho em um momento de cuidado e bem-estar. Cada sabonete possui características únicas, oferecendo limpeza suave, espuma cremosa e fragrâncias delicadas. Acompanha embalagem presenteável.",
    image: "/produtos/kit-trio-frutado.jpeg",
    imageAlt: "Kit com três sabonetes artesanais frutados",
    available: true,
  },*/
  /*{
    id: "kit-mini-sabonetes",
    slug: "kit-mini-sabonetes-aromaticos",
    name: "Kit de Mini Sabonetes Aromáticos",
    category: "kits",
    type: "Kit de presente",
    fragrance: "Sortido",
    price: 10,
    isKit: true,
    shortDescription:
      "Kit com 6 corações para perfumar gavetas, armários e lavabos. Feito sob encomenda.",
    fullDescription:
      "Perfeito para perfumar gavetas, armários, lavabos ou potinhos decorativos no banheiro, o kit de mini sabonetes une delicadeza, charme e uma fragrância agradável ao ambiente. Além de decorar, deixam um perfume suave e aconchegante por onde são colocados. Produto feito sob encomenda, disponível em todas as fragrâncias do catálogo, ideal para lembranças, presentes e decoração. Kit com 6 corações.",
    image: "/produtos/kit-mini-sabonetes.jpeg",
    imageAlt: "Kit de mini sabonetes aromáticos em formato de coração",
    available: true,
  },*/
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAllSlugs(): string[] {
  return products.map((product) => product.slug);
}