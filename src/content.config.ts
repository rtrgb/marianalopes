import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const text = z.object({ en: z.string(), pt: z.string() });

/** Estudos de caso: um arquivo .md por trabalho e por idioma (src/content/work/en e /pt). */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Parte final da URL: /work/<page>/
      page: z.string(),
      order: z.number(),
      category: z.string(),
      type: z.string(),
      date: z.string(),
      role: z.string(),
      team: z.string().optional(),
      brief: z.string(),
      idea: z.string(),
      nextTime: z.string().optional(),
      link: z.string().url().optional(),
      linkLabel: z.string().optional(),
      /** Caminho de um vídeo dentro de /public, ex.: /videos/teeva.mp4 */
      video: z.string().optional(),
      cover: image().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

/** Grade "More work": todos os vídeos. */
const videos = defineCollection({
  loader: file('./src/content/videos.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      kind: text,
      video: z.string().optional(),
      poster: image().optional(),
      link: z.string().url().optional(),
    }),
});

/** Galeria de modelo. */
const modeling = defineCollection({
  loader: file('./src/content/modeling.json'),
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: text,
      category: z.enum(['Editorial', 'Studio', 'Commercial']),
      featured: z.boolean().default(false),
    }),
});

export const collections = { work, videos, modeling };
