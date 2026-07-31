/**
 * ────────────────────────────────────────────────────────────────────────────
 *  FONTE ÚNICA DE VERDADE — edite este arquivo para mudar textos e dados.
 * ────────────────────────────────────────────────────────────────────────────
 *  Aqui ficam TODOS os dados editáveis do site (nome, CRP, WhatsApp, e-mail,
 *  textos das seções, FAQ, especialidades...). Você não precisa mexer em nenhum
 *  componente de layout para atualizar o conteúdo.
 *
 *  Procure por "[PREENCHER]" para ver o que ainda falta confirmar/definir.
 */

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 1. DECISÃO PENDENTE — FAIXA ETÁRIA DO PÚBLICO                             ║
// ╚══════════════════════════════════════════════════════════════════════════╝
// Há divergência entre o briefing ("adolescentes, adultos e idosos") e o
// currículo (experiência com "crianças, adolescentes e adultos").
// PADRÃO ATUAL = o que a cliente pediu no briefing. Para trocar em TODO o site,
// altere APENAS a linha abaixo. Recomendação a confirmar com a cliente:
// "crianças, adolescentes, adultos e idosos" (se ela atende todas as faixas).
export const ageRange = "adolescentes, adultos e idosos";

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 2. IDENTIFICAÇÃO E CONTATO (dados oficiais do currículo)                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const profile = {
  name: "Priscila Santos",
  role: "Psicóloga clínica",
  crp: "CRP 02/29363",
  city: "Recife/PE",
  serviceMode: "Atendimento 100% online",
  languages: "Bilíngue (português e inglês)",
  approach: "Gestalt-terapia",
};

export const contact = {
  // WhatsApp — SÓ DÍGITOS, com código do país (55) + DDD + número.
  // ⚠️ Confirmar com a cliente se este é o número público para agendamentos.
  whatsappNumber: "5581983415584",
  whatsappDisplay: "(81) 98341-5584",
  // Mensagem pré-preenchida ao abrir o WhatsApp — tom exploratório (sem parecer
  // que o simples envio já confirma/fecha um atendimento).
  whatsappMessage: "Olá, Priscila! Vim pelo seu site e gostaria de saber mais sobre os seus atendimentos.",
  // ⚠️ Gmail pessoal (funciona). Sugestão futura: e-mail com domínio próprio.
  email: "psicologia.priscilasantos@gmail.com",
  linkedin: "https://www.linkedin.com/in/priscila-goncalves-psi",
  // [PREENCHER opcional] Instagram / outras redes — deixe "" se não houver.
  instagram: "https://www.instagram.com/psi.priscilasantoss/",
};

/** Monta um link wa.me com a mensagem pré-preenchida e URL-encoded. */
export function whatsappUrl(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 3. SEO / METADADOS                                                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const seo = {
  // URL pública COMPLETA da home (origem + subcaminho).
  // DEMO no GitHub Pages: inclui o "/priscila". Usada nos dados estruturados.
  // ⚠️ [PREENCHER] Ao usar domínio próprio, troque para "https://seu-dominio.com.br"
  // (sem subcaminho) e ajuste `site`/`base` em astro.config.mjs.
  siteUrl: "https://emersonleo.github.io/priscila",
  title: `${profile.name} · Psicóloga Online (Gestalt) — Adolescentes, Adultos e Idosos`,
  description:
    "Psicóloga clínica bilíngue (PT/EN) com atendimento 100% online em Gestalt-terapia. " +
    `Psicoterapia para ${ageRange} no Brasil e no exterior, com escuta sensível a questões raciais, de gênero e sexualidade. ${profile.crp}.`,
  ogImage: "/og-image.jpg", // gerada por `npm run make:og`
  keywords: [
    "psicóloga online",
    "psicoterapia online",
    "gestalt-terapia online",
    "psicóloga bilíngue português inglês",
    "terapia para brasileiros no exterior",
    "psicologia transcultural",
    "psicóloga negra",
    "escuta sensível a questões raciais",
    "terapia online para adolescentes",
    "psicóloga afirmativa LGBTQIAP+",
    "terapia para ansiedade e trauma",
    "terapia de relacionamentos",
  ],
  locale: "pt_BR",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 4. NAVEGAÇÃO                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const nav: { label: string; href: string }[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Formação", href: "#formacao" },
  { label: "Ética", href: "#etica" },
  { label: "Contato", href: "#contato" },
];

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 5. HERO / CAPA                                                            ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const hero = {
  // H1 — headline principal (único <h1> do site).
  headline: `Psicoterapia online para ${ageRange} no Brasil e no exterior`,
  // Subheadline mais direta (bom para leitura e para Google Ads).
  subheadline: `Um espaço de escuta acolhedora para ${ageRange}. Atendimento 100% online, em português e inglês, com abordagem em Gestalt-terapia.`,
    // Selo de localização logo abaixo do título (ajuda no SEO local).
  locationBadge: "Atendimento online (todo o Brasil e exterior)",
  primaryCta: "Agende sua consulta",
  secondaryCta: "Conheça meu trabalho",
  trustSignals: ["Atendimento online", "Bilíngue PT/EN", "Formação internacional (GATLA)"],
  imageAlt:
    "Priscila Santos, psicóloga clínica, de óculos, olhando para a câmera com expressão serena",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 6. SOBRE                                                                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const about = {
  eyebrow: "Quem sou eu",
  title: "Uma escuta atenta para a sua história",
  paragraphs: [
    `Sou psicóloga clínica e atendo ${ageRange} em português e inglês.`,
    "Minha trajetória internacional despertou um interesse especial pela psicologia transcultural e pelos processos migratórios, ampliando meu olhar para questões de identidade, pertencimento e adaptação cultural.",
    "Minha prática valoriza uma escuta sensível às diferentes experiências de vida, incluindo questões raciais, culturais e de pertencimento, sempre respeitando a singularidade de cada pessoa.",
  ],
  imageAlt:
    "Priscila Santos segurando livros, com olhar acolhedor, em ambiente iluminado por luz natural",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 7. ABORDAGEM (Gestalt-terapia)                                            ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const approach = {
  eyebrow: "Como eu trabalho",
  title: "Gestalt-terapia: um cuidado construído no encontro",
  paragraphs: [
    "A Gestalt-terapia entende que cada pessoa é única. Meu trabalho busca construir, junto com você, um espaço de presença, escuta e acolhimento para compreender sua experiência e ampliar possibilidades de viver.",
    "Mais do que olhar apenas para os sintomas, considero a sua história, os seus vínculos e o contexto em que você vive.",
  ],
  pillars: [
    { title: "Presença genuína", text: "Um encontro real, sem julgamentos, onde você pode ser você." },
    { title: "Escuta atenta", text: "Atenção cuidadosa à sua experiência, no aqui e agora." },
    { title: "Você por inteiro", text: "Um cuidado que considera a pessoa para além do sintoma." },
    { title: "Sua singularidade", text: "Cada história, vínculo e contexto tratado como único." },
  ],
  imageAlt:
    "Priscila Santos com olhar reflexivo voltado para o lado, em ambiente tranquilo",
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 8. ESPECIALIDADES (com filtro interativo)                                 ║
// ╚══════════════════════════════════════════════════════════════════════════╝
// Ao clicar em um chip, o texto correspondente aparece + CTA de agendamento.
// Tom acolhedor, sem promessas de resultado (alinhado ao Código de Ética / CFP).
export interface Specialty {
  id: string;
  label: string;
  text: string;
}

export const specialties = {
  eyebrow: "Áreas de atuação",
  title: "Em que posso te acompanhar",
  intro:
    "Toque em uma área para entender como a terapia pode te ajudar. Cada processo é " +
    "individual e respeita o seu momento.",
  items: [
    {
      id: "ansiedade",
      label: "Ansiedade",
      text: "A ansiedade pode trazer sofrimento e tornar o dia a dia mais difícil. Na terapia, buscamos compreender o que ela comunica e encontrar formas mais saudáveis de lidar com essa experiência.",
    },
    {
      id: "depressao",
      label: "Depressão",
      text: "Quando o desânimo e o vazio persistem, até as tarefas mais simples pesam. Caminho ao seu lado para acolher essa dor sem pressa, ajudando a reencontrar sentido e novas possibilidades de existir.",
    },
    {
      id: "luto",
      label: "Luto",
      text: "Perder alguém ou algo importante reorganiza toda a nossa vida. Ofereço um espaço de escuta para atravessar o luto no seu tempo, honrando o que foi e o que permanece.",
    },
    {
      id: "trauma",
      label: "Trauma",
      text: "Experiências difíceis podem deixar marcas que seguem presentes no dia a dia. Na terapia, criamos um espaço seguro para elaborar essas vivências no seu tempo, com cuidado e respeito.",
    },
    {
      id: "autoestima",
      label: "Autoestima",
      text: "A forma como nos enxergamos afeta cada relação e cada escolha. Na terapia, exploramos com cuidado essa relação com você mesmo(a), ampliando a consciência sobre quem você é para além das cobranças.",
    },
    {
      id: "relacionamentos",
      label: "Relacionamentos interpessoais",
      text: "As relações com as pessoas ao redor influenciam diretamente o nosso bem-estar. Podemos olhar juntos para os seus vínculos e para as formas de se relacionar de um jeito mais saudável e autêntico.",
    },
    {
      id: "conflitos-familiares",
      label: "Conflitos familiares",
      text: "As relações familiares carregam afeto e também tensões que, às vezes, travam. Podemos olhar juntos para esses vínculos e para o seu lugar neles, buscando formas mais saudáveis de se relacionar.",
    },
    {
      id: "genero-sexualidade",
      label: "Gênero e sexualidade",
      text: "Questões de gênero e sexualidade merecem um espaço livre de julgamentos. Ofereço uma escuta acolhedora e afirmativa para pessoas LGBTQIAP+, respeitando a sua identidade, os seus afetos e a sua história.",
    },
    {
      id: "racismo",
      label: "Racismo e questões raciais",
      text: "As experiências de racismo atravessam o emocional de formas profundas e nem sempre reconhecidas. Como mulher negra, ofereço uma escuta sensível a essas vivências, num espaço onde sua experiência é acolhida e legitimada.",
    },
    {
      id: "brasileiros-exterior",
      label: "Brasileiros no exterior / adaptação cultural",
      text: "Viver entre culturas mobiliza questões de identidade, pertencimento e adaptação. Com formação e vivência internacional, acompanho brasileiros no exterior e quem passa por processos migratórios — em português ou inglês.",
    },
    {
      id: "doencas-cronicas",
      label: "Aspectos emocionais das doenças crônicas",
      text: "Conviver com uma doença crônica envolve desafios emocionais que vão muito além do corpo. Ofereço um cuidado que considera a pessoa por inteiro, e não apenas o diagnóstico.",
    },
    {
      id: "violencia-sexual",
      label: "Vivências relacionadas à violência sexual",
      text: "Falar sobre experiências de violência sexual exige um espaço seguro, respeitoso e sem pressa. Estou aqui para acolher a sua história com cuidado e sigilo, no tempo que for possível para você.",
    },
  ] satisfies Specialty[],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 9. VOCÊ SE IDENTIFICA? (auto-identificação do público)                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const audience = {
  eyebrow: "Você se identifica?",
  title: "Talvez eu possa te acompanhar",
  intro: "A terapia pode fazer sentido especialmente se você:",
  items: [
    "É adolescente, adulto ou idoso em busca de um espaço de escuta",
    "É brasileiro(a) vivendo no exterior ou passando por um processo de adaptação cultural",
    "Está atravessando mudanças de contexto que mexem com identidade e pertencimento",
    "Procura uma escuta sensível a questões raciais",
    "Busca um espaço afirmativo para questões de gênero e sexualidade",
    "Convive com os desafios emocionais de uma doença crônica",
    "Quer ser cuidado(a) por inteiro — para além do sintoma",
  ],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 10. ÉTICA PROFISSIONAL                                                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export interface EthicsItem {
  title: string;
  text: string;
  link?: { href: string; label: string };
}

export const ethics = {
  eyebrow: "Ética profissional",
  title: "Um cuidado sério e sigiloso",
  intro:
    "Meu trabalho é orientado pelo Código de Ética Profissional do Psicólogo e pelo " +
    "compromisso com um atendimento responsável, respeitoso e sigiloso.",
  items: [
    {
      title: "Sigilo e confidencialidade",
      text: "Tudo o que você compartilha permanece protegido. O sigilo é um princípio ético fundamental da psicologia.",
    },
    {
      title: "Registro no Conselho",
      text: `Atuação regular e registrada — ${profile.crp} —, com responsabilidade e respeito às normas da profissão.`,
    },
    {
      title: "Respeito à sua singularidade",
      text: "Cada pessoa é acolhida em sua história, seu contexto e sua forma única de estar no mundo.",
    },
    {
      title: "Código de Ética",
      text: "Compromisso com o Código de Ética Profissional do Psicólogo em cada atendimento. Por transparência, o documento está disponível na íntegra.",
      // Link oficial do CFP (transparência).
      link: {
        href: "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf",
        label: "Ler o Código de Ética (CFP)",
      },
    },
  ] satisfies EthicsItem[],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 11. FORMAÇÃO E CREDENCIAIS (conteúdo real — exibir tudo)                  ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const credentials = {
  eyebrow: "Formação e credenciais",
  title: "Formação acadêmica e experiência internacional",
  intro:
    "Minha formação reúne Psicologia, Gestalt-terapia e experiências internacionais que " +
    "ampliaram meu olhar para diferentes contextos culturais.",
  education: [
    {
      institution: "Centro Universitário Frassinetti do Recife",
      detail: "Bacharel em Psicologia · Recife/PE",
    },
    {
      institution: "GATLA — Gestalt Associates Training Los Angeles",
      detail:
        "Programa de Treinamento em Gestalt-terapia · Los Angeles/CA, EUA (formação internacional, sessões supervisionadas e discussão de casos)",
    },
  ],
  courses: [
    {
      institution: "NYIGT — New York Institute for Gestalt Therapy",
      detail: "Introdução à Fenomenologia para Gestalt-terapeutas · Nova York, EUA",
    },
    {
      institution: "Long Island University",
      detail: "Psicologia Social · Brooklyn/NY, EUA",
    },
    {
      institution: "Oakton College",
      detail: "Inglês como Segunda Língua (ESL) · Chicago/IL, EUA",
    },
    {
      institution: "SENAC Idiomas",
      detail: "Inglês Avançado · Recife/PE",
    },
  ],
  // Enquadramento honesto: a vivência nos EUA é internacional/intercultural,
  // NÃO experiência clínica.
  highlights: [
    "Atuação clínica em Gestalt-terapia (crianças e adultos)",
    "Experiência internacional e intercultural nos EUA",
    "Atendimento bilíngue (português e inglês)",
    "Olhar transcultural e sensível a processos migratórios",
  ],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 12. FAQ (também alimenta o schema FAQPage para SEO)                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export interface FaqItem {
  q: string;
  a: string;
}

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "Ainda com dúvidas?",
  items: [
    {
      q: "Como funciona a psicoterapia online?",
      a: "As sessões acontecem por videochamada, de onde você estiver, com o mesmo sigilo e cuidado de um atendimento presencial. Você só precisa de um dispositivo com internet e de um ambiente reservado onde se sinta à vontade para conversar.",
    },
    {
      q: "Para quais públicos e idades você atende?",
      // Usa a faixa etária centralizada.
      a: `Atendo ${ageRange}, incluindo brasileiros que vivem no exterior. Cada processo é conduzido de forma individual, respeitando o momento e a história de cada pessoa.`,
    },
    {
      q: "O que é a Gestalt-terapia?",
      a: "É uma abordagem construída no encontro, que dá atenção à sua experiência no presente. Mais do que focar apenas no sintoma, buscamos ampliar a consciência sobre você mesmo(a) e descobrir, no seu ritmo, novas possibilidades de existir.",
    },
    {
      q: "Como saber se a Gestalt-terapia é adequada para mim?",
      a: "Podemos conversar sobre isso antes de começar. A proposta é olhar para a sua experiência de forma singular, no seu ritmo. Se fizer sentido para você, seguimos juntos nesse processo.",
    },
    {
      q: "Você atende em inglês?",
      a: "Sim. O atendimento é bilíngue (português e inglês), o que facilita o cuidado com brasileiros no exterior e com pessoas que vivem entre culturas.",
    },
    {
      q: "Posso fazer terapia morando fora do Brasil?",
      a: "Sim. O atendimento é 100% online e acompanho brasileiros que vivem no exterior. Os horários são combinados de acordo com o seu fuso, para caber na sua rotina — em português ou inglês.",
    },
    {
      q: "As sessões são sigilosas?",
      a: "Sim. O sigilo é um princípio ético fundamental da psicologia e é resguardado pelo Código de Ética Profissional do Psicólogo. O que você compartilha permanece protegido.",
    },
    {
      q: "Preciso ter um diagnóstico para iniciar a terapia?",
      a: "Não. Você não precisa de um diagnóstico nem de um motivo específico para começar. Podemos partir do que está te mobilizando neste momento.",
    },
    {
      q: "E se eu nunca fiz terapia antes?",
      a: "Tudo bem começar do zero. No primeiro contato explico como funciona e seguimos no seu ritmo, sem pressa, para que você se sinta à vontade.",
    },
    {
      q: "Qual a duração e a frequência das sessões?",
      // ⚠️ [CONFIRMAR] valores padrão do mercado; ajuste se a Priscila trabalhar diferente.
      a: "As sessões costumam ter cerca de 50 minutos e acontecem, em geral, semanalmente — mas a frequência é combinada e ajustada conforme a sua necessidade.",
    },
    {
      q: "Como funcionam os valores e o pagamento (inclusive para quem mora no exterior)?",
      a: "Os valores e as formas de pagamento — inclusive para quem mora fora do Brasil — são apresentados diretamente comigo, no primeiro contato pelo WhatsApp, antes do agendamento da sessão. Assim consigo esclarecer todas as suas dúvidas.",
    },
    {
      q: "Como faço para agendar?",
      a: "É só clicar no botão de WhatsApp aqui no site. A partir daí combinamos o melhor horário e esclareço qualquer dúvida antes da primeira sessão.",
    },
  ] satisfies FaqItem[],
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 13. CONTATO                                                               ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const contactSection = {
  eyebrow: "Vamos conversar",
  title: "Agende sua consulta",
  intro:
    "Se desejar conversar, envie uma mensagem pelo WhatsApp. Será um prazer esclarecer " +
    "suas dúvidas e combinar o melhor horário para a nossa primeira sessão.",
  whatsappCta: "Conversar no WhatsApp",
  // Se quiser usar o formulário (opcional), configure o Formspree no README.
  // Deixe "" para esconder o formulário e manter só o WhatsApp/e-mail.
  formspreeEndpoint: "", // ex.: "https://formspree.io/f/xxxxxx"  [PREENCHER opcional]
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 14. RODAPÉ                                                                ║
// ╚══════════════════════════════════════════════════════════════════════════╝
export const footer = {
  tagline: "Psicoterapia online, acolhedora e bilíngue.",
  note: profile.serviceMode,
};

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║ 15. LEGAL (rodapé + páginas de Privacidade/LGPD e Termos)                 ║
// ╚══════════════════════════════════════════════════════════════════════════╝
// ⚠️ Os textos das páginas legais são um ponto de partida honesto sobre como o
// site funciona. Recomende à Priscila revisá-los (idealmente com apoio jurídico)
// antes de considerá-los definitivos.
export const legal = {
  // Nota curta exibida no rodapé.
  cfpNote:
    "Atendimento online realizado conforme a regulamentação vigente do Conselho " +
    "Federal de Psicologia (Resolução CFP nº 11/2018).",
  lgpdNote:
    "Este site respeita a sua privacidade e a Lei Geral de Proteção de Dados (LGPD nº 13.709/2018).",
  // Slugs das páginas (o base do Astro é aplicado nos componentes).
  links: [
    { label: "Política de Privacidade", slug: "privacidade" },
    { label: "Termos de Uso", slug: "termos" },
  ],
  updatedAt: "julho de 2026", // ⚠️ [PREENCHER] data da última atualização
};
