# mariana lopes

portfólio da mari. astro, en/pt, estático.

```bash
npm install
npm run dev     # localhost:4321
npm run build
```

## onde mexer

- email, insta, cidade → `src/data/site.json`
- textos do site → `src/i18n/ui.ts` (en e pt)
- trabalhos → `src/content/work/en|pt/*.md` (mesmo `page` nos dois)
- grade de vídeos → `src/content/videos.json`
- galeria de modelo → `src/content/modeling.json` (`featured: true` vai pra home)
- fotos → `src/assets/photos/`
- cores/fontes → topo do `src/styles/global.css`

## vídeos

por enquanto abrem o post no insta/tiktok. pra tocar no site: joga o mp4 em `public/videos/` e coloca `video: /videos/nome.mp4` no .md ou no json.

```bash
ffmpeg -i in.mov -vf "scale=1080:-2" -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 128k -movflags +faststart out.mp4
```

## deploy

vercel, só importar o repo. depois trocar `SITE_URL` no `astro.config.mjs`.

## todo

- [ ] vídeos em mp4
- [ ] revisar bio e título do about
- [ ] crédito da foto principal (`photoCredit`)
- [ ] domínio
