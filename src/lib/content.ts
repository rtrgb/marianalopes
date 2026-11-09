import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

export async function getWork(lang: Lang) {
  const all = await getCollection('work', (e) => e.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getVideos() {
  return getCollection('videos');
}

export async function getModeling() {
  return getCollection('modeling');
}
