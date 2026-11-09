export const languages = { en: 'EN', pt: 'PT' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title': 'Mariana Lopes | Content Creator, Video Editor & Model',
    'meta.description':
      'Mariana Lopes creates and edits video content for brands, from UGC and influencer campaigns to concept-led edits, and works as a model. Based in Balneário Camboriú, Brazil.',
    'nav.content': 'Content',
    'nav.modeling': 'Modeling',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'skip': 'Skip to content',

    'hero.tagline': 'Content Creator, Video Editor & Model',
    'hero.intro':
      'I create and edit video content for brands, from UGC and influencer campaigns to concept-led edits. I also work in front of the camera as a model.',
    'hero.ctaContent': 'Explore content',
    'hero.ctaModeling': 'Explore modeling',
    'hero.alt': 'Mariana Lopes, studio portrait',

    'work.title': 'Selected work',
    'work.all': 'All videos',
    'work.brief': 'Brief',
    'work.idea': 'The idea',
    'work.role': 'My role',
    'work.team': 'Team',
    'work.next': 'Next time',
    'work.nextProject': 'Next project',
    'work.back': 'Selected work',
    'work.videoSoon': 'Video coming soon',

    'more.title': 'More work',
    'more.subtitle': 'Videos created and edited for brands, 2026',
    'more.watch': 'Watch',

    'modeling.eyebrow': 'In front of the camera',
    'modeling.title': 'Modeling',
    'modeling.intro': 'Editorials, studio work and commercial shoots.',
    'modeling.all': 'All',
    'modeling.view': 'View portfolio',
    'modeling.filter': 'Filter by category',
    'modeling.cta': 'Booking & collaborations',
    'modeling.ctaLink': 'Get in touch',
    'cat.Editorial': 'Editorial',
    'cat.Studio': 'Studio',
    'cat.Commercial': 'Commercial',

    'about.eyebrow': 'About',
    'about.heading': 'Content that connects people to brands, from the planning to the final cut.',
    'about.bio':
      'I’m a content creator, video editor and model studying Advertising at Univali. I work with brands on UGC, influencer content, content planning and video editing, and I bring what I learn in front of the camera into every edit.',
    'about.based': 'Based in',
    'about.languages': 'Languages',
    'about.languagesValue': 'Portuguese, English, Spanish',
    'about.education': 'Education',
    'about.educationValue': 'Advertising, Univali',
    'about.alt': 'Mariana Lopes smiling',

    'contact.title': 'Let’s work',
    'contact.titleEm': 'together.',
    'contact.content': 'Content & video for brands',
    'contact.contentText': 'UGC, influencer content, video editing and content planning.',
    'contact.modeling': 'Modeling & brand partnerships',
    'contact.modelingText': 'Editorials, campaigns and shoots. Booked directly.',
    'contact.emailLabel': 'Send an email',

    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous photo',
    'lightbox.next': 'Next photo',
    'footer.rights': 'All rights reserved.',
    'footer.credit': 'site by',
  },
  pt: {
    'meta.title': 'Mariana Lopes | Criadora de conteúdo, editora de vídeo e modelo',
    'meta.description':
      'Mariana Lopes cria e edita conteúdo em vídeo para marcas, de UGC e campanhas de influência a edições conceituais, e trabalha como modelo. Baseada em Balneário Camboriú.',
    'nav.content': 'Conteúdo',
    'nav.modeling': 'Modelo',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.menu': 'Menu',
    'nav.close': 'Fechar',
    'skip': 'Pular para o conteúdo',

    'hero.tagline': 'Criadora de conteúdo, editora de vídeo e modelo',
    'hero.intro':
      'Crio e edito conteúdo em vídeo para marcas, de UGC e campanhas de influência a edições conceituais. Também trabalho na frente das câmeras como modelo.',
    'hero.ctaContent': 'Ver conteúdo',
    'hero.ctaModeling': 'Ver portfólio de modelo',
    'hero.alt': 'Mariana Lopes, retrato em estúdio',

    'work.title': 'Trabalhos selecionados',
    'work.all': 'Todos os vídeos',
    'work.brief': 'Briefing',
    'work.idea': 'A ideia',
    'work.role': 'Meu papel',
    'work.team': 'Equipe',
    'work.next': 'Da próxima vez',
    'work.nextProject': 'Próximo projeto',
    'work.back': 'Trabalhos selecionados',
    'work.videoSoon': 'Vídeo em breve',

    'more.title': 'Mais trabalhos',
    'more.subtitle': 'Vídeos criados e editados para marcas, 2026',
    'more.watch': 'Assistir',

    'modeling.eyebrow': 'Na frente das câmeras',
    'modeling.title': 'Modelo',
    'modeling.intro': 'Editoriais, estúdio e ensaios comerciais.',
    'modeling.all': 'Todas',
    'modeling.view': 'Ver portfólio',
    'modeling.filter': 'Filtrar por categoria',
    'modeling.cta': 'Trabalhos e parcerias',
    'modeling.ctaLink': 'Entrar em contato',
    'cat.Editorial': 'Editorial',
    'cat.Studio': 'Estúdio',
    'cat.Commercial': 'Comercial',

    'about.eyebrow': 'Sobre',
    'about.heading': 'Conteúdo que conecta pessoas a marcas, do planejamento ao corte final.',
    'about.bio':
      'Sou criadora de conteúdo, editora de vídeo e modelo, e curso Publicidade e Propaganda na Univali. Trabalho com marcas em UGC, conteúdo de influência, planejamento de conteúdo e edição de vídeo, e levo para cada edição o que aprendo na frente das câmeras.',
    'about.based': 'Baseada em',
    'about.languages': 'Idiomas',
    'about.languagesValue': 'Português, inglês, espanhol',
    'about.education': 'Formação',
    'about.educationValue': 'Publicidade e Propaganda, Univali',
    'about.alt': 'Mariana Lopes sorrindo',

    'contact.title': 'Vamos trabalhar',
    'contact.titleEm': 'juntos.',
    'contact.content': 'Conteúdo e vídeo para marcas',
    'contact.contentText': 'UGC, conteúdo de influência, edição de vídeo e planejamento de conteúdo.',
    'contact.modeling': 'Modelo e parcerias',
    'contact.modelingText': 'Editoriais, campanhas e ensaios. Contato direto.',
    'contact.emailLabel': 'Enviar e-mail',

    'lightbox.close': 'Fechar',
    'lightbox.prev': 'Foto anterior',
    'lightbox.next': 'Próxima foto',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.credit': 'site por',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function path(lang: Lang, p = '/'): string {
  const clean = p.startsWith('/') ? p : `/${p}`;
  return lang === defaultLang ? clean : `/pt${clean === '/' ? '/' : clean}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'pt' : 'en';
}
