// Brazilian Portuguese translations for the product catalog, keyed by slug.
// Only translatable fields are provided; everything else falls back to English.
import type { Product } from "./products";

const W = "3 meses contra defeitos de fabricação.";
const STARTER = "1 x Kit Inicial Culinário Grátis (Óleo de Cura e Ervas Artesanais)";
const LID_COPPER = "1 x Tampa de Pedra-Sabão Combinando, com Detalhes em Cobre";
const FREE_GIFT = "1 x Brinde Grátis (selecionado conforme disponibilidade de estoque)";
const CURING_MANUAL = "1 x Manual de cura";

// ── Shared dimension notes ──
const DIM_UNIQUE =
  "Por ser uma peça totalmente artesanal, pequenas variações de dimensões, textura e coloração são normais e tornam sua peça única.";
const DIM_HANDCRAFTED =
  "As panelas de pedra são feitas em um processo totalmente artesanal, por isso pode haver pequenas variações nas dimensões das peças.";
const DIM_PRESSURE_SET =
  "Por ser um produto 100% artesanal, podem ocorrer pequenas variações de medidas, capacidade e design, tornando cada peça única. Iniciamos o processo de cura antes do envio, e você precisará concluí-lo seguindo nossas instruções.";
const DIM_SIMPLE =
  "Feito em um processo totalmente artesanal, por isso pode haver pequenas variações nas dimensões da peça.";
const DIM_NATURAL =
  "Feito em um processo totalmente artesanal, por isso pequenas variações de dimensões, textura e coloração são normais e tornam cada peça única.";

// ── Shared descriptions ──
const DESC_PRESSURE =
  "Esta panela de pressão de pedra-sabão foi desenvolvida para oferecer uma experiência de cozimento superior. 100% segura, permite a abertura durante o preparo dos alimentos, proporcionando mais controle, tranquilidade e praticidade no dia a dia. Sua principal vantagem está na retenção e liberação gradual do calor, mantendo os alimentos quentes por 1 a 2 horas após o término do cozimento, preservando sabor, textura e qualidade térmica por muito mais tempo. Além disso, é uma escolha mais saudável. Estudos recentes indicam que a pedra-sabão pode transferir minerais benéficos como ferro (Fe), zinco (Zn), cálcio (Ca) e magnésio (Mg) para os alimentos, contribuindo para uma dieta mais nutritiva. O material é totalmente livre de substâncias tóxicas, garantindo segurança para você e sua família. Extremamente resistente e durável, a pedra-sabão é um material nobre que, bem cuidado, pode durar centenas de anos, tornando esta panela não apenas um utensílio de cozinha, mas um investimento para gerações. Uma combinação perfeita de segurança, saúde, eficiência térmica e durabilidade, ideal para quem valoriza qualidade e bem-estar na cozinha.";

const DESC_POT_MINAS =
  "Das raízes de Minas Gerais, no Brasil, um ofício passado de geração em geração. As panelas de pedra-sabão têm a capacidade de reter e liberar o calor gradualmente, mantendo os alimentos quentes por aproximadamente 1 a 2 horas após o cozimento. Além disso, é uma opção muito mais saudável. Estudos recentes indicam a transferência natural de minerais benéficos — como ferro (Fe), zinco (Zn), cálcio (Ca) e magnésio (Mg) — da panela para a comida, e também é livre de substâncias tóxicas. A pedra-sabão é um material extremamente forte e durável. Quando bem cuidada, uma panela pode durar gerações, mantendo sua funcionalidade por centenas de anos.";

const DESC_SET_PRESSURE =
  "As panelas de pedra-sabão combinam perfeitamente tradição, funcionalidade e elegância. Com elas, você pode preparar e servir refeições incrivelmente saborosas enquanto aproveita os benefícios dos minerais naturais da pedra, como ferro, cálcio e manganês, que contribuem para a sua saúde. Além do design sofisticado e artesanal, essas panelas mantêm os alimentos quentes por muito mais tempo, pois a pedra retém o calor mesmo após sair da fonte de calor. Nosso exclusivo modelo de panela de pressão de pedra-sabão se destaca no mercado pela inovação e segurança incomparável. Sem grampos ou travas de metal, elimina o risco de explosão, garantindo mais tranquilidade no seu dia a dia. A pressão é gerada pelo peso da tampa e seu encaixe preciso na borda da panela, permitindo que o calor circule internamente antes de ser liberado pela válvula de vapor. Cada peça é única, feita à mão, garantindo exclusividade e um toque especial na sua cozinha. Além disso, ao comprar nossas panelas, você apoia o trabalho de artesãos que preservam essa tradição centenária.";

// ── Shared benefit lists ──
const BEN_PRESSURE = [
  "100% segura — pode ser aberta durante o cozimento, oferecendo mais controle e tranquilidade.",
  "Retém e libera o calor gradualmente, mantendo os alimentos quentes por 1 a 2 horas após o cozimento.",
  "Refeições mais saudáveis! A pedra-sabão pode transferir minerais benéficos (Ferro, Zinco, Cálcio, Magnésio) para a comida.",
  "Totalmente livre de substâncias tóxicas, garantindo segurança para você e sua família.",
  "Extremamente resistente e durável — quando bem cuidada, pode durar centenas de anos.",
];

const BEN_POT_MINAS = [
  "Retém e libera o calor gradualmente, mantendo os alimentos quentes por 1 a 2 horas após o cozimento.",
  "Refeições mais saudáveis! Transfere naturalmente minerais benéficos (Ferro, Zinco, Cálcio, Magnésio) para a comida.",
  "Livre de substâncias tóxicas, garantindo segurança para você e sua família.",
  "Feita à mão em Minas Gerais, com uma tradição passada de geração em geração.",
  "Extremamente forte e durável — quando bem cuidada, pode durar gerações.",
];

const BEN_CLASSIC = [
  "Tem a capacidade de liberar gradualmente o calor contido na pedra, mantendo os alimentos quentes por cerca de 1 a 2 horas após o cozimento.",
  "Muito mais saudável! Estudos recentes indicam a transferência de nutrientes benéficos (Fe, Zn, Ca, Mg) da panela para a comida.",
  "A pedra-sabão é um material extremamente durável; se bem cuidada, durará centenas de anos.",
  "As panelas são naturalmente antiaderentes, facilitando muito a limpeza e o cozimento.",
  "Pode ser usada em fogão a gás, fogão a lenha e também no forno!",
];

const BEN_SET_PRESSURE = [
  "Aquecimento uniforme e eficiente em toda a peça.",
  "Mantém os alimentos quentes por mais tempo, pois a pedra retém o calor após sair da fonte de calor.",
  "Compatível com fogão a gás, elétrico, carvão e lenha (exceto indução).",
  "Design artesanal que valoriza sua cozinha, com minerais naturais (ferro, cálcio, manganês) transferidos para a comida.",
  "Durabilidade e resistência — cada peça artesanal é única e feita para durar.",
];

// Grills / fondue / bakeware base (first three lines)
const BEN_NAT = [
  "Tem a capacidade de liberar gradualmente o calor contido na pedra, mantendo seus alimentos quentes por cerca de 1 a 2 horas após o cozimento.",
  "Muito mais saudável! Alguns estudos recentes indicam a transferência de nutrientes benéficos (Fe, Zn, Ca, Mg) da panela para a comida.",
  "Material 100% natural — não transfere substâncias nocivas para a comida.",
];
const NONSTICK = "Naturalmente antiaderente, facilitando muito a limpeza e o cozimento.";

export const productsPt: Record<string, Partial<Product>> = {
  "cookware-set-2-3-4": {
    name: "Conjunto: Panela 2L + Panela 3L + Panela de Pressão 4L + Brinde",
    tagline: "O conjunto definitivo para quem gosta de cozinhar em maior quantidade!",
    capacity: "2L + 3L + 4L · Fogão a Lenha · Gás · Forno",
    badge: "Conjunto Especial",
    description:
      "Este conjunto é ideal para quem gosta de cozinhar maiores quantidades de comida! Feito à mão por artesãos locais com pedra-sabão vulcânica de qualidade premium, este conjunto cobre todas as suas necessidades culinárias: panelas para cozimento lento e uma autêntica panela de pressão de pedra.",
    includes: [
      "1 x Panela de pedra-sabão, 2 litros (Altura: 9,5 cm, diâmetro: 22 cm)",
      "1 x Panela de pedra-sabão, 3 litros (Altura: 9,5 cm, diâmetro: 27 cm)",
      "1 x Panela de pressão de pedra-sabão de 4 litros (Altura: 15 cm, diâmetro: 25 cm)",
      STARTER,
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "soapstone-pressure-cooker-7l": {
    name: "Panela de Pressão de Pedra-Sabão - 7 Litros",
    tagline: "Cozimento sob pressão seguro, redefinido na pedra",
    capacity: "7L · Gás · Fogão a Lenha · Forno",
    badge: "Novo",
    description: DESC_PRESSURE,
    includes: ["1 x Panela de Pressão de Pedra-Sabão de 7 Litros", LID_COPPER, STARTER],
    benefits: BEN_PRESSURE,
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "soapstone-pressure-cooker-5l": {
    name: "Panela de Pressão de Pedra-Sabão - 5 Litros",
    tagline: "Cozimento sob pressão seguro, redefinido na pedra",
    capacity: "5L · Gás · Fogão a Lenha · Forno",
    badge: "Novo",
    description: DESC_PRESSURE,
    includes: ["1 x Panela de Pressão de Pedra-Sabão de 5 Litros", LID_COPPER, STARTER],
    benefits: BEN_PRESSURE,
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "soapstone-pressure-cooker-4l": {
    name: "Panela de Pressão de Pedra-Sabão - 4 Litros",
    tagline: "Cozimento sob pressão seguro, redefinido na pedra",
    capacity: "4L · Gás · Fogão a Lenha · Forno",
    badge: "Novo",
    description: DESC_PRESSURE,
    includes: ["1 x Panela de Pressão de Pedra-Sabão de 4 Litros", LID_COPPER, STARTER],
    benefits: BEN_PRESSURE,
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "dutch-soapstone-pot-2in1": {
    name: "Panela Holandesa de Pedra-Sabão 2 em 1",
    tagline: "Uma panela funda e uma chapa plana em uma só peça",
    capacity: "3L · Gás · Fogão a Lenha · Forno",
    badge: "Versátil",
    description:
      "A panela holandesa de pedra-sabão 2 em 1 é uma peça culinária versátil e charmosa, projetada para oferecer funcionalidade e beleza à sua experiência de cozinha. Feita de pedra-sabão, um material que retém e distribui o calor de maneira uniforme, esta panela proporciona um cozimento eficiente e preciso. O design 2 em 1 combina duas funções distintas em uma única peça. Na base, você encontra uma panela funda, ideal para preparar ensopados, sopas, molhos e diversos pratos que exigem cozimento lento e uniforme. A tampa de pedra-sabão serve como uma frigideira plana adicional. Esse recurso extra amplia as opções culinárias, permitindo grelhar, dourar ou fritar alimentos com eficiência. A tampa se integra perfeitamente ao conjunto, oferecendo versatilidade sem comprometer o visual elegante e rústico da peça.",
    includes: [
      "1 x Panela Holandesa Funda de Pedra-Sabão (Altura: 10 cm, diâmetro: 23 cm, capacidade: 3 litros)",
      "1 x Tampa de Pedra-Sabão que funciona como frigideira plana (Altura: 4 cm, diâmetro: 23 cm)",
      STARTER,
    ],
    benefits: [
      "Design 2 em 1: uma panela funda para ensopados, sopas e molhos, mais uma tampa que vira frigideira plana.",
      "A pedra-sabão retém e distribui o calor de maneira uniforme para um cozimento eficiente e preciso.",
      "A tampa plana permite grelhar, dourar ou fritar — ampliando suas opções culinárias.",
      "Retém e libera o calor gradualmente, mantendo os alimentos quentes muito tempo após o cozimento.",
      "Extremamente resistente e durável — quando bem cuidada, pode durar centenas de anos.",
    ],
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "soapstone-pot-5l": {
    name: "Panela de Pedra-Sabão 5 Litros",
    tagline: "Gerações de ofício de Minas Gerais",
    capacity: "5L · Gás · Fogão a Lenha · Forno",
    badge: "Artesanal",
    description: DESC_POT_MINAS,
    includes: ["1 x Panela de Pedra-Sabão de 5 Litros", LID_COPPER, STARTER],
    benefits: BEN_POT_MINAS,
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "soapstone-pot-4l": {
    name: "Panela de Pedra-Sabão 4 Litros",
    tagline: "Gerações de ofício de Minas Gerais",
    capacity: "4L · Gás · Fogão a Lenha · Forno",
    badge: "Artesanal",
    description: DESC_POT_MINAS,
    includes: ["1 x Panela de Pedra-Sabão de 4 Litros", LID_COPPER, STARTER],
    benefits: BEN_POT_MINAS,
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "soapstone-pot-3l": {
    name: "Panela de Pedra-Sabão 3 Litros",
    tagline: "Gerações de ofício de Minas Gerais",
    capacity: "3L · Gás · Fogão a Lenha · Forno",
    badge: "Artesanal",
    description: DESC_POT_MINAS,
    includes: ["1 x Panela de Pedra-Sabão de 3 Litros", LID_COPPER, STARTER],
    benefits: BEN_POT_MINAS,
    warranty: W,
    dimensionsNote: DIM_UNIQUE,
  },
  "set-5-soapstone-pots": {
    name: "Conjunto de 5 Panelas de Pedra-Sabão 0,8L | 1L | 1,5L | 2L + Brinde",
    tagline: "Um conjunto completo de pedra-sabão para toda a família",
    capacity: "0,8L + 1L + 1L + 1,5L + 2L · Gás · Fogão a Lenha · Forno",
    badge: "Conjunto Especial",
    description:
      "Este conjunto de panelas de pedra-sabão é perfeito para aproveitar as refeições com estilo entre amigos ou em família! Ideal para servir até 4 pessoas. Feito à mão com pedra-sabão genuína, este conjunto completo cobre o cozimento do dia a dia — de pequenos caldeirões a uma frigideira versátil — trazendo o sabor autêntico e o calor da cozinha na pedra para a sua mesa.",
    includes: [
      "1 x Caldeirão de 0,8 litro (11 cm de altura x 13 cm de diâmetro)",
      "1 x Frigideira com tampa, aproximadamente 1 litro (6 cm de altura x 20 cm de diâmetro)",
      "1 x Panela de 1 litro (9,5 cm de altura x 15,5 cm de diâmetro)",
      "1 x Panela de 1,5 litro (9,5 cm de altura x 18 cm de diâmetro)",
      "1 x Panela de 2 litros (9,5 cm de altura x 23 cm de diâmetro)",
      "1 x Brinde Grátis (selecionado conforme disponibilidade de estoque)",
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "dream-kitchen-cookware-set": {
    name: "Conjunto de Panelas de Pedra-Sabão – Cozinha dos Sonhos",
    tagline: "Tudo o que sua cozinha precisa, em pura pedra-sabão",
    capacity: "Frigideira + Panela 2L + Panela de Pressão 3L + Travessa de Lasanha + Pilão + Cuscuzeira 4L",
    badge: "Conjunto Completo",
    description:
      "Este é um conjunto versátil que atenderá às diversas necessidades de uma cozinha. Feito à mão com pedra-sabão genuína, o conjunto Cozinha dos Sonhos reúne tudo o que você precisa para cozinhar como um artesão — de frigideira e panelas a uma panela de pressão de pedra, uma travessa de lasanha, um pilão e uma cuscuzeira 3 em 1. Uma coleção completa que transforma cada refeição em uma autêntica experiência de cozinha na pedra.",
    includes: [
      "1 x Frigideira de 23 cm (5 cm de altura x 23 cm de diâmetro)",
      "1 x Panela de 2 litros (9,5 cm de altura x 22 cm de diâmetro)",
      "1 x Panela de pressão de 3 litros (14,5 cm de altura x 19 cm de diâmetro)",
      "1 x Travessa de lasanha de tamanho médio",
      "1 x Pilão com faixa de cobre",
      "1 x Cuscuzeira/panela 3 em 1 – 4 litros (2 litros em cada seção)",
      CURING_MANUAL,
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote:
      "As peças de pedra-sabão são enviadas novas em seu estado natural (cinza) e precisam passar por um processo de cura antes do primeiro uso — após a cura, sua peça ficará permanentemente preta (um manual de cura passo a passo está incluído). Como cada peça é totalmente artesanal e medida em litros, pequenas variações nas dimensões são normais.",
  },
  "set-3-soapstone-pots-large": {
    name: "Conjunto de 3 Panelas de Pedra-Sabão (Grandes)",
    tagline: "Para quem gosta de cozinhar em maior quantidade",
    capacity: "2L + 3L + 4L · Gás · Fogão a Lenha · Forno",
    badge: "Conjunto Especial",
    description:
      "Este conjunto é ideal para quem gosta de cozinhar maiores quantidades de comida! Feito à mão com pedra-sabão genuína, estas três panelas de tamanho generoso são perfeitas para ensopados de cozimento lento, refeições em família e encontros — trazendo o sabor autêntico e o calor da cozinha na pedra para a sua mesa.",
    includes: [
      "1 x Panela de pedra-sabão de 2 litros",
      "1 x Panela de pedra-sabão de 3 litros",
      "1 x Panela de pedra-sabão de 4 litros",
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "set-4-pots-1-grill": {
    name: "Conjunto de 4 Panelas de Pedra e 1 Grelha 1L | 1,5L | 2L | 3L + Brinde",
    tagline: "Um conjunto versátil de 5 peças para toda a cozinha",
    capacity: "1L + 1,5L + 2L + 3L + Grelha · Gás · Fogão a Lenha · Forno",
    badge: "Conjunto Especial",
    description:
      "Um conjunto de 5 peças, incluindo 3 panelas, 1 frigideira e uma grelha. Este é um conjunto versátil que atenderá às diversas necessidades de uma cozinha. Feito à mão com pedra-sabão genuína, traz o sabor autêntico e o calor da cozinha na pedra para tudo, das refeições do dia a dia aos grelhados.",
    includes: [
      "1 x Frigideira de 1 litro (Altura: 5 cm x diâmetro: 18 cm)",
      "1 x Panela de 1,5 litro (Altura: 9,5 cm x diâmetro: 18 cm)",
      "1 x Panela de 2 litros (Altura: 9,5 cm, diâmetro: 23 cm)",
      "1 x Panela de 3 litros (Altura: 10 cm, diâmetro: 22 cm)",
      "1 x Grelha (27 cm)",
      CURING_MANUAL,
      FREE_GIFT,
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "set-3-pots-pressure-cooker-5l": {
    name: "Conjunto de 3 Panelas de Pedra + Panela de Pressão - 5 litros",
    tagline: "Tradição, função e elegância em um só conjunto",
    capacity: "Panela de Pressão 5L + 3L + 2L + 1,5L · Gás · Elétrico · Carvão · Fogão a Lenha",
    badge: "Conjunto Especial",
    description: DESC_SET_PRESSURE,
    includes: [
      "1 x Panela de Pressão de 5 litros (Diâmetro: 23 cm, Altura: 15 cm, ~5,0 kg)",
      "1 x Panela de 3 litros (Diâmetro: 22 cm, Altura: 10 cm, ~4,0 kg)",
      "1 x Panela de 2 litros (Diâmetro: 17 cm, Altura: 9 cm, ~3,2 kg)",
      "1 x Panela de 1,5 litro (Diâmetro: 14 cm, Altura: 8 cm, ~2,0 kg)",
    ],
    benefits: BEN_SET_PRESSURE,
    warranty: W,
    dimensionsNote: DIM_PRESSURE_SET,
  },
  "complete-set-5-pieces-mortar": {
    name: "Conjunto Completo de Panelas de Pedra – 5 Peças + Pilão",
    tagline: "Tudo o que sua cozinha precisa, mais um pilão de brinde",
    capacity: "Frigideira 1L + 1,5L + 2L + Panela de Pressão 3L + Grelha · Gás · Fogão a Lenha · Forno",
    badge: "Conjunto Completo",
    description:
      "Este é um conjunto versátil que atenderá às diversas necessidades de uma cozinha. Feita à mão com pedra-sabão genuína, esta coleção completa cobre o cozimento do dia a dia — de frigideira e panelas a uma panela de pressão de pedra e uma grelha — e vem com um pilão de pedra-sabão como brinde. Uma cozinha completa em pura pedra, trazendo o sabor autêntico e o calor da cozinha na pedra para a sua mesa.",
    includes: [
      "1 x Frigideira de 1 litro (18 cm de diâmetro)",
      "1 x Panela de 1,5 litro",
      "1 x Panela de 2 litros",
      "1 x Panela de pressão de 3 litros",
      "1 x Grelha (23 cm de diâmetro)",
      "1 x Pilão de pedra-sabão (brinde)",
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "versatile-kitchen-cookware-set": {
    name: "Conjunto de Panelas de Pedra – Cozinha Versátil",
    tagline: "Um conjunto versátil para todas as necessidades da cozinha",
    capacity: "Frigideira 23cm + Panela 2L + Panela de Pressão 3L + Pilão · Gás · Fogão a Lenha · Forno",
    badge: "Conjunto Completo",
    description:
      "Este é um conjunto versátil que atenderá às diversas necessidades de uma cozinha. Feito à mão com pedra-sabão genuína, este conjunto reúne uma frigideira, uma panela, uma panela de pressão de pedra e um pilão de pedra-sabão — tudo o que você precisa para cozinhar como um artesão e trazer o sabor autêntico e o calor da cozinha na pedra para a sua mesa.",
    includes: [
      "1 x Frigideira de 23 cm (3,2 cm de altura x 23 cm de diâmetro)",
      "1 x Panela de 2 litros (9,5 cm de altura x 22 cm de diâmetro)",
      "1 x Panela de pressão de 3 litros (14,5 cm de altura x 19 cm de diâmetro)",
      "1 x Pilão de pedra-sabão com faixa de cobre",
      CURING_MANUAL,
    ],
    benefits: BEN_CLASSIC,
    warranty: W,
    dimensionsNote:
      "As panelas de pedra são feitas em um processo totalmente artesanal, por isso são medidas em litros, o que pode resultar em pequenas variações nas dimensões.",
  },
  "osmenino-stone-cookware-set": {
    name: "Conjunto de Panelas de Pedra Osmenino",
    tagline: "Uma cozinha de artesão completa em pura pedra-sabão",
    capacity: "Panela de Pressão 3L + Panelas 3L + 2L + 1,5L + Frigideira 23cm · Gás · Elétrico · Carvão · Fogão a Lenha",
    badge: "Conjunto Premium",
    description:
      "Um conjunto completo de panelas de pedra-sabão que combina tradição, funcionalidade e elegância. Feito à mão com pedra-sabão genuína, reúne uma panela de pressão de pedra, três panelas e uma frigideira — tudo o que você precisa para cozinhar como um artesão. Cada peça é única, feita à mão, garantindo exclusividade e um toque especial na sua cozinha. Além disso, ao comprar nossas panelas, você apoia o trabalho de artesãos que preservam essa tradição centenária.",
    includes: [
      "1 x Panela de Pressão de 3 litros (Diâmetro: 23 cm, Altura: 12 cm, ~5,0 kg)",
      "1 x Panela de 3 litros (Diâmetro: 22 cm, Altura: 11 cm, ~4,5 kg)",
      "1 x Panela de 2 litros (Diâmetro: 22 cm, Altura: 7 cm, ~4,0 kg)",
      "1 x Panela de 1,5 litro (Diâmetro: 17 cm, Altura: 9 cm, ~3,2 kg)",
      "1 x Frigideira de pedra (Diâmetro: 23 cm, Altura: 5 cm, ~3,0 kg)",
    ],
    benefits: [
      "Aquecimento uniforme e eficiente em toda a peça.",
      "Mantém os alimentos quentes por mais tempo, pois a pedra retém o calor após sair da fonte de calor.",
      "Compatível com fogão a gás, elétrico, carvão e lenha (exceto indução).",
      "Design artesanal que valoriza sua cozinha.",
      "Durabilidade e resistência — cada peça artesanal é única e feita para durar.",
    ],
    warranty: W,
    dimensionsNote: DIM_PRESSURE_SET,
  },
  "set-3-pots-pressure-cooker-4l": {
    name: "Conjunto de 3 Panelas de Pedra + Panela de Pressão - 4 litros",
    tagline: "Tradição, função e elegância em um só conjunto",
    capacity: "Panela de Pressão 4L + 2L + 1,5L + 0,8L · Gás · Elétrico · Carvão · Fogão a Lenha",
    badge: "Conjunto Especial",
    description: DESC_SET_PRESSURE,
    includes: [
      "1 x Panela de Pressão de 4 litros (Diâmetro: 23 cm, Altura: 12 cm, ~5,0 kg)",
      "1 x Panela de 2 litros (Diâmetro: 22 cm, Altura: 7 cm, ~4,0 kg)",
      "1 x Panela de 1,5 litro (Diâmetro: 17 cm, Altura: 9 cm, ~3,2 kg)",
      "1 x Panela de 0,8 litro (Diâmetro: 14 cm, Altura: 9 cm, ~2,0 kg)",
    ],
    benefits: BEN_SET_PRESSURE,
    warranty: W,
    dimensionsNote: DIM_PRESSURE_SET,
  },
  "luxury-soapstone-water-filter-10l": {
    name: "Filtro de Água de Pedra-Sabão de Luxo 10L com Cobre Puro",
    tagline: "Água naturalmente fresca • Decoração elegante • Acabamento premium artesanal",
    capacity: "10L (5L superior + 5L inferior) · Bancada",
    badge: "Luxo",
    description:
      "Traga elegância e bem-estar para sua casa com este belo filtro de água de pedra-sabão de 10 litros, feito à mão com detalhes em cobre puro. Perfeito para quem busca água limpa e fresca enquanto adiciona uma peça decorativa de luxo à cozinha. Com capacidade de 10 litros (5L superior + 5L inferior), inclui torneira e 2 velas filtrantes, pronto para uso imediato. Feito de pedra-sabão natural e cobre puro, mantém a água naturalmente fresca, com um acabamento premium artesanal resistente e durável. Dimensões: Altura 54,8 cm, Largura 23,9 cm, Abertura 14 cm.",
    includes: [
      "1 x Filtro de Água de Pedra-Sabão de 10 litros (5L superior + 5L inferior)",
      "1 x Torneira",
      "2 x Velas filtrantes",
      "1 x Manual de instruções",
      "Embalagem segura",
    ],
    benefits: [
      "A filtração natural ajuda a remover impurezas para uma água limpa e fresca.",
      "Mantém a água naturalmente fresca graças às propriedades térmicas da pedra-sabão.",
      "Design elegante e sofisticado — perfeito para cozinhas modernas, de luxo ou rústicas.",
      "Uma bela peça de destaque para a bancada e uma ótima ideia de presente.",
      "Acabamento premium artesanal em pedra-sabão natural e cobre puro — resistente e durável.",
    ],
    warranty: W,
    dimensionsNote: DIM_NATURAL,
  },
  "soapstone-baking-pan-m": {
    name: "Forma de Pedra-Sabão M",
    tagline: "A forma perfeita para massas, bolos e assados",
    capacity: "32 x 20 cm · Forno · Gás · Fogão a Lenha",
    badge: "Forma",
    description:
      "Uma forma de pedra-sabão é a opção perfeita para fazer massas, bolos e todo tipo de assados. Feita à mão com pedra-sabão genuína e elegantes alças de cobre, distribui o calor de maneira uniforme e traz o sabor autêntico e o calor da cozinha na pedra para as suas criações no forno.",
    includes: [
      "1 x Forma de Pedra-Sabão, tamanho M (Comprimento: 32 cm, Largura: 20 cm, Altura: 5,5 cm)",
      "Alças de cobre",
    ],
    benefits: [
      ...BEN_NAT,
      NONSTICK,
      "Perfeita para massas, bolos, lasanhas e todo tipo de assados.",
    ],
    warranty: W,
    dimensionsNote: DIM_SIMPLE,
  },
  "soapstone-grill-32cm-rechaud": {
    name: "Grelha de Pedra-Sabão 32cm + Rechaud",
    tagline: "Grelhar em pedra refratária, direto na mesa",
    capacity: "32 cm · Fogo Aberto · Gás · Rechaud de Mesa",
    badge: "Grelha",
    description:
      "As grelhas de pedra-sabão se destacam pela força e dureza; têm também a vantagem de ser pedra refratária, o que as torna excelentes para carnes. Mas também podem ser usadas para fazer omeletes, carnes, legumes gratinados e muitos outros pratos deliciosos. Esta grelha de 32 cm vem com uma base rechaud para manter sua comida quente direto na mesa. A grelha chegará à sua nova casa e precisará passar pelo processo de cura.",
    includes: [
      "1 x Grelha de Pedra-Sabão (32 cm) com alças de cobre",
      "1 x Base Rechaud de Pedra-Sabão",
    ],
    benefits: [
      ...BEN_NAT,
      "A pedra refratária a torna excelente para grelhar carnes, omeletes e legumes gratinados.",
      "O rechaud incluso mantém seus pratos quentes direto na mesa.",
    ],
    warranty: W,
    dimensionsNote:
      "Feito em um processo totalmente artesanal, por isso pode haver pequenas variações nas dimensões da peça. A grelha precisará passar por um processo de cura antes do primeiro uso.",
  },
  "fondue-set-pot-grill": {
    name: "Conjunto de Fondue – Panela (0,8L) + Grelha (32 cm)",
    tagline: "Carnes grelhadas e fondue em um único conjunto",
    capacity: "Panela 0,8L + Grelha 32cm + 2 Rechauds + Molheiras · Mesa",
    badge: "Conjunto Especial",
    description:
      "Em uma única compra, você terá tudo o que precisa para fazer um delicioso prato de carnes grelhadas e um saboroso fondue de queijo ou chocolate! Feito à mão com pedra-sabão genuína, este conjunto completo traz o calor e a convivência da cozinha à mesa para os seus encontros — grelhe suas carnes e derreta seu fondue direto na mesa.",
    includes: [
      "1 x Grelha de pedra-sabão, 32 cm",
      "1 x Panela de pedra-sabão, 0,8 L (Altura: 10 cm | Largura: 13 cm)",
      "2 x Rechauds de pedra-sabão",
      "1 x Molheira (Altura: 5 cm / Largura: 7 cm)",
      "2 x Molheiras (Altura: 5 cm / Largura: 10 cm)",
      "3 x Molheiras (Altura: 5 cm / Largura: 12 cm)",
    ],
    benefits: [
      ...BEN_NAT,
      NONSTICK,
      "Perfeito para carnes grelhadas e fondue de queijo ou chocolate, direto na mesa.",
    ],
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "fondue-set-pot-grill-27cm": {
    name: "Conjunto de Fondue – Panela + Grelha (27 cm)",
    tagline: "Carnes grelhadas e fondue em um único conjunto",
    capacity: "Panela 0,8L + Grelha 27cm + 2 Rechauds + Molheiras · Mesa",
    badge: "Conjunto Especial",
    description:
      "Em uma única compra, você terá tudo o que precisa para fazer um delicioso prato de carnes grelhadas e um saboroso fondue de queijo ou chocolate! Feito à mão com pedra-sabão genuína, este conjunto completo traz o calor e a convivência da cozinha à mesa para os seus encontros — grelhe suas carnes e derreta seu fondue direto na mesa.",
    includes: [
      "1 x Grelha de pedra-sabão, 27 cm",
      "1 x Panela de pedra-sabão, 0,8 L (Altura: 10 cm | Largura: 13 cm)",
      "2 x Rechauds de pedra-sabão",
      "1 x Molheira (Altura: 5 cm / Largura: 7 cm)",
      "2 x Molheiras (Altura: 5 cm / Largura: 10 cm)",
      "3 x Molheiras (Altura: 5 cm / Largura: 12 cm)",
    ],
    benefits: [
      ...BEN_NAT,
      NONSTICK,
      "Perfeito para carnes grelhadas e fondue de queijo ou chocolate, direto na mesa.",
    ],
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "soapstone-fondue-kit": {
    name: "Kit de Fondue de Pedra-Sabão – Queijo ou Chocolate + Molheiras",
    tagline: "Tudo o que você precisa para o fondue dos seus sonhos",
    capacity: "Panela 0,8L + Rechaud + Molheiras · Mesa",
    badge: "Kit Fondue",
    description:
      "Em uma única compra, você terá tudo o que precisa para fazer o fondue de queijo ou chocolate dos seus sonhos! Feito à mão com pedra-sabão genuína, este kit mantém seu fondue quente e cremoso direto na mesa, trazendo o calor e a convivência da cozinha à mesa para os seus encontros.",
    includes: [
      "1 x Panela de pedra-sabão, 0,8 L (Altura: 10 cm | Largura: 13 cm)",
      "1 x Rechaud de pedra-sabão",
      "1 x Molheira (Altura: 5 cm / Largura: 7 cm)",
      "1 x Molheira (Altura: 5 cm / Largura: 10 cm)",
      "1 x Molheira (Altura: 5 cm / Largura: 12 cm)",
    ],
    benefits: [
      ...BEN_NAT,
      NONSTICK,
      "Perfeito para fondue de queijo ou chocolate, direto na mesa.",
    ],
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "complete-soapstone-fondue-set-32cm": {
    name: "Conjunto Completo de Fondue de Pedra-Sabão (Grelha 32 cm)",
    tagline: "Bife grelhado e fondue para 3 a 6 pessoas",
    capacity: "Grelha 32cm + 2x Panelas 0,8L + 3 Rechauds + 6 Molheiras + 6 Garfos · Mesa",
    badge: "Conjunto Completo",
    description:
      "Em uma única compra, você terá tudo o que precisa para fazer um delicioso bife grelhado e um saboroso fondue de queijo ou chocolate! Produto ideal para 3 a 6 pessoas. Feito à mão com pedra-sabão genuína, este conjunto completo traz o calor e a convivência da cozinha à mesa para os seus encontros — grelhe suas carnes e derreta seu fondue direto na mesa, com garfos de aço inox inclusos.",
    includes: [
      "1 x Grelha de pedra-sabão de 32 cm",
      "2 x Panela de pedra-sabão, 0,8 L (Altura: 10 cm | Largura: 13 cm)",
      "3 x Rechauds de pedra-sabão",
      "2 x Molheiras (Altura: 5 cm / Largura: 7 cm)",
      "2 x Molheiras (Altura: 5 cm / Largura: 10 cm)",
      "2 x Molheiras (Altura: 5 cm / Largura: 12 cm)",
      "6 x Garfos de fondue de aço inox com cabos de plástico de alta resistência",
    ],
    benefits: [
      ...BEN_NAT,
      NONSTICK,
      "Perfeito para bife grelhado e fondue de queijo ou chocolate, direto na mesa.",
    ],
    warranty: W,
    dimensionsNote: DIM_HANDCRAFTED,
  },
  "complete-soapstone-fondue-set-27cm": {
    name: "Conjunto Completo de Fondue de Pedra-Sabão (Grelha 27 cm)",
    tagline: "Bife grelhado e fondue para 1 a 4 pessoas",
    capacity: "Grelha 27cm + 2x Panelas 0,8L + 3 Rechauds + 6 Molheiras + 6 Garfos · Mesa",
    badge: "Conjunto Completo",
    description:
      "Em uma única compra, você terá tudo o que precisa para fazer um delicioso bife grelhado e um saboroso fondue de queijo ou chocolate! Produto ideal para 1 a 4 pessoas. Feito à mão com pedra-sabão genuína, este conjunto completo traz o calor e a convivência da cozinha à mesa para os seus encontros — grelhe suas carnes e derreta seu fondue direto na mesa, com garfos de aço inox inclusos.",
    includes: [
      "1 x Grelha de pedra-sabão de 27 cm",
      "2 x Panela de pedra-sabão, 0,8 L (Altura: 10 cm | Largura: 13 cm)",
      "3 x Rechauds de pedra-sabão",
      "2 x Molheiras (Altura: 5 cm / Largura: 7 cm)",
      "2 x Molheiras (Altura: 5 cm / Largura: 10 cm)",
      "2 x Molheiras (Altura: 5 cm / Largura: 12 cm)",
      "6 x Garfos de fondue de aço inox com cabos de plástico de alta resistência",
    ],
    benefits: [
      ...BEN_NAT,
      NONSTICK,
      "Perfeito para bife grelhado e fondue de queijo ou chocolate, direto na mesa.",
    ],
    warranty: W,
    dimensionsNote:
      "As peças de pedra-sabão são enviadas novas em seu estado natural (cinza) e precisam passar por um processo de cura antes do primeiro uso — após a cura, sua peça ficará permanentemente preta (um manual de cura passo a passo está incluído). As panelas de pedra são feitas em um processo totalmente artesanal, por isso pode haver pequenas variações nas dimensões das peças.",
  },
  "soapstone-dinnerware-set-8": {
    name: "Conjunto de Jantar de Pedra-Sabão (8 lugares)",
    tagline: "Elegância atemporal, esculpida com maestria na pedra",
    capacity: "8 Lugares · 32 Peças · Mesa",
    badge: "Luxo",
    description:
      "Encante seus convidados com nosso requintado Conjunto de Jantar de Pedra-Sabão, uma fusão perfeita de elegância atemporal e funcionalidade. Cada peça é esculpida com maestria em pedra-sabão, proporcionando não apenas uma experiência culinária excepcional, mas também uma apresentação magnífica. A pedra-sabão de qualidade premium garante durabilidade, resistência e um toque de charme rústico refinado, enquanto o design atemporal acrescenta uma dimensão estética à sua mesa. As dimensões cuidadosamente escolhidas garantem praticidade, e a versatilidade das peças permite diversas configurações de mesa.",
    includes: [
      "8 x Pratos para massa (22 cm)",
      "8 x Pratos rasos (28 cm)",
      "8 x Pratos de sobremesa (20 cm)",
      "8 x Tigelas com pires (500 ml)",
    ],
    benefits: [
      "Cada peça é esculpida com maestria em pedra-sabão de qualidade premium, para durabilidade e resistência.",
      "Design elegante e atemporal que acrescenta uma dimensão estética à sua mesa.",
      "Dimensões práticas e versáteis para diversas configurações de mesa.",
      "Material 100% natural, com um charme rústico refinado.",
      "Envio seguro em caixas de madeira — cada peça chega protegida e em perfeito estado.",
    ],
    warranty: W,
    dimensionsNote:
      "Cada peça é esculpida em pedra-sabão natural por um processo artesanal, por isso pequenas variações de dimensões, textura e coloração são normais e tornam cada peça única. Todas as peças são cuidadosamente embaladas em caixas de madeira para um transporte seguro.",
  },
  "soapstone-bowls-8-with-saucer": {
    name: "8 Tigelas de Pedra-Sabão 500 ML – Com Pires",
    tagline: "Tigelas versáteis que mantêm a comida na temperatura certa",
    capacity: "8 x 500 ml · Com Pires · Mesa · Vai ao Forno",
    badge: "Mesa",
    description:
      "A tigela de pedra-sabão é uma peça versátil com diversos usos; além de servir refeições, também pode ir ao forno. Mantenha seus caldos e sorvetes na temperatura certa por muito mais tempo! Cada tigela acompanha seu próprio pires. As peças são feitas em um processo 100% artesanal, por isso pode haver pequenas variações nas dimensões.",
    includes: [
      "8 x Tigelas de pedra-sabão, 500 ml (Altura: 5,5 cm, Largura: 13 cm)",
      "8 x Pires combinando (14,5 cm de diâmetro)",
    ],
    benefits: [
      "Peça versátil — perfeita para servir refeições e também vai ao forno.",
      "Mantém caldos, sopas e sorvetes na temperatura certa por muito mais tempo.",
      "Pedra-sabão 100% natural, com um charme rústico refinado.",
      "Cada tigela acompanha seu próprio pires combinando.",
      "Não precisa de cura — para escurecer a peça, basta aplicar óleo na superfície e aguardar 30 minutos.",
    ],
    warranty: W,
    dimensionsNote:
      "As peças são feitas em um processo 100% artesanal, por isso pode haver pequenas variações nas dimensões. As tigelas de pedra-sabão não precisam de cura; se preferir a peça preta, basta aplicar óleo na superfície e aguardar 30 minutos para escurecer.",
  },
  "stone-water-filter-10l": {
    name: "Filtro de Água de Pedra de 10 Litros",
    tagline: "Pureza, elegância e tradição",
    capacity: "10L · Bancada · Residencial e Comercial",
    badge: "Bem-estar",
    description:
      "Transforme a qualidade da água da sua casa com o Filtro de Água de Pedra de 10 Litros. Feito de pedra natural altamente durável, ajuda a manter a água fresca por mais tempo, combinando eficiência, beleza e tradição em um único produto. Ideal para casas, escritórios e áreas de lazer, seu reservatório de 10 litros oferece excelente capacidade para atender toda a família, reduzindo a necessidade de reabastecimento constante. Tenha água de qualidade sempre disponível e leve para casa a combinação perfeita de tradição, praticidade e bem-estar — mais saúde, economia e estilo para o seu dia a dia.",
    includes: [
      "1 x Filtro de Água de Pedra Natural de 10 Litros",
      "1 x Torneira",
      "Compatível com velas filtrantes de alta eficiência",
    ],
    benefits: [
      "Água mais limpa e agradável para o consumo diário.",
      "Mantém a água naturalmente fresca por mais tempo.",
      "Capacidade de 10 litros, ideal para toda a família.",
      "Material resistente com durabilidade duradoura.",
      "Design elegante que combina com qualquer ambiente, com instalação e manutenção fáceis.",
      "Uma alternativa sustentável à água engarrafada.",
    ],
    warranty: W,
    dimensionsNote:
      "Feito em um processo totalmente artesanal a partir de pedra natural, por isso pequenas variações de dimensões, textura e coloração são normais e tornam cada peça única.",
  },
};
