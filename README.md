# Mariana Lopes, portfólio

Site pessoal da Mariana Lopes: criadora de conteúdo, editora de vídeo e modelo.
Feito com [Astro](https://astro.build), bilíngue (inglês e português), estático e rápido.

## Rodar no computador

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera o site final em /dist
npm run preview  # mostra o /dist localmente
```

## Páginas

| Inglês | Português | O que é |
| - | - | - |
| `/` | `/pt/` | Home: apresentação, trabalhos, modelo, sobre e contato |
| `/content/` | `/pt/content/` | Trabalhos selecionados e grade com todos os vídeos |
| `/work/<trabalho>/` | `/pt/work/<trabalho>/` | Estudo de caso |
| `/modeling/` | `/pt/modeling/` | Galeria de modelo com filtro e foto ampliada |

## Onde editar cada coisa

Nenhuma dessas mudanças exige mexer no código das páginas.

| Quero mudar... | Arquivo |
| - | - |
| E-mail, Instagram, cidade, crédito da foto principal | `src/data/site.json` |
| Textos fixos do site (menu, bio, títulos, botões) | `src/i18n/ui.ts` (tem `en` e `pt`) |
| Um estudo de caso | `src/content/work/en/<trabalho>.md` e `src/content/work/pt/<trabalho>.md` |
| A grade "More work" | `src/content/videos.json` |
| A galeria de modelo | `src/content/modeling.json` |
| Fotos | `src/assets/photos/` |
| Cores e fontes | `src/styles/global.css` (topo do arquivo) |

### Adicionar um estudo de caso

1. Copie `src/content/work/en/teeva.md` com outro nome, por exemplo `nova-marca.md`.
2. Troque os campos. `page` vira a URL (`/work/nova-marca/`) e `order` define a posição na lista.
3. Faça o mesmo em `src/content/work/pt/` com o texto em português e o mesmo `page`.

### Adicionar vídeos

Os vídeos ainda apontam para os posts no Instagram e no TikTok. Para tocar no próprio site:

1. Exporte o vídeo em MP4 (H.264), vertical, de preferência com menos de 15 MB.
2. Coloque em `public/videos/`, por exemplo `public/videos/teeva.mp4`.
3. No `.md` do trabalho, adicione `video: /videos/teeva.mp4`. Na grade, adicione `"video": "/videos/teeva.mp4"` no item do `videos.json`.

Para comprimir: `ffmpeg -i original.mov -vf "scale=1080:-2" -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 128k -movflags +faststart teeva.mp4`

### Adicionar fotos na galeria

1. Coloque a foto em `src/assets/photos/` (JPG com uns 1600 px no lado maior é suficiente).
2. Adicione um item em `src/content/modeling.json` com `src`, `category` (`Editorial`, `Studio` ou `Commercial`) e o texto alternativo nos dois idiomas.
3. `"featured": true` faz a foto aparecer na Home (as três primeiras marcadas).

O Astro gera versões menores e em WebP de todas as fotos automaticamente no build.

## Publicar

O jeito mais simples é a Vercel (grátis): importe o repositório em vercel.com, sem mudar nenhuma configuração.
Netlify e Cloudflare Pages também funcionam. Depois, troque `SITE_URL` em `astro.config.mjs` pela URL final,
porque ele é usado no SEO, no sitemap e na imagem de compartilhamento.

## Pendências

- [ ] Vídeos em MP4 para tocar no próprio site (hoje abrem o post).
- [ ] Revisar a bio e o título da seção About (`src/i18n/ui.ts`): são rascunhos montados a partir das respostas do formulário.
- [ ] Crédito do fotógrafo da foto principal (`photoCredit` em `src/data/site.json`).
- [ ] Domínio próprio e `SITE_URL`.
