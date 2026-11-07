/* Physics Structure Lab v3.4 - direct explanations grounded in physical phenomena.
   Review the cache version whenever static files change. */
const CACHE_NAME = 'physics-structure-lab-offline-v3.6.2-20261107';
const APP_FILES = ['./','./index.html','./main.js','./physics.js','./definition-lab.js','./acceleration-lab.js','./mechanics-lab.js','./mechanics-data.js','./mechanics-deep-part1.js','./mechanics-deep-part2.js','./mechanics-deep.js','./mechanics-formula-readers.js','./momentum-origin-model.js','./momentum-origin-lab.js','./mechanics-origins-part1.js','./mechanics-origins-part2.js','./mechanics-origins-part3.js','./mechanics-origins.js','./incline-explanation-model.js','./incline-textbook-data.js','./incline-textbook.js','./mechanics-worked-cases.js','./mechanics-worked-article.js','./mechanics-practice-part1.js','./mechanics-practice-part2.js','./mechanics-synthesis.js','./mechanics-practice-core.js','./mechanics-practice.js','./force-model.js','./force-lab.js','./conservation-lab.js','./conservation-model.js','./advanced-mechanics-model.js','./advanced-mechanics-lab.js','./analytical-lab.js','./kinematics-extensions.js','./kinematics-lab.js','./language.js','./english-pages.js','./mechanics-en.js','./knowledge-connections-data.js','./knowledge-connections.js','./knowledge-journeys-core.js','./knowledge-journeys.js','./transfer-cases.js','./transfer-models.js','./transfer-lab.js','./inquiry-core.js','./inquiry-lab.js','./inquiry-evidence.js','./inquiry-method-prompts.js','./styles.css','./icon.svg','./manifest.webmanifest'];
const KATEX_ORIGIN = 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/';
const KATEX_FILES = [
  KATEX_ORIGIN + 'katex.min.css',
  KATEX_ORIGIN + 'katex.min.js',
  KATEX_ORIGIN + 'fonts/KaTeX_AMS-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Caligraphic-Bold.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Caligraphic-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Fraktur-Bold.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Fraktur-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Main-Bold.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Main-BoldItalic.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Main-Italic.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Main-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Math-BoldItalic.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Math-Italic.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_SansSerif-Bold.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_SansSerif-Italic.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_SansSerif-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Script-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Size1-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Size2-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Size3-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Size4-Regular.woff2',
  KATEX_ORIGIN + 'fonts/KaTeX_Typewriter-Regular.woff2'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Core application and math renderer must be available before offline is declared ready.
    await cache.addAll([...APP_FILES, KATEX_FILES[0], KATEX_FILES[1]]);
    // Store every KaTeX WOFF2 variant to cover later chapters as well.
    const results = await Promise.allSettled(KATEX_FILES.slice(2).map(url => cache.add(url)));
    if (results.some(r => r.status === 'rejected')) {
      console.warn('Some math fonts are unavailable offline; retry when connected.');
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('physics-structure-lab-offline-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const isLocal = url.origin === self.location.origin && url.pathname.startsWith(new URL(self.registration.scope).pathname);
  const isMath = url.href.startsWith(KATEX_ORIGIN);
  if (!isLocal && !isMath) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    // App files are network-first, cache-fallback. This allows newly released
    // educational content to appear online even when an old worker controls a tab.
    // Pinned KaTeX assets remain cache-first for repeatable offline formulas.
    const bundled = isLocal && APP_FILES.some(file => new URL(file, self.registration.scope).pathname === url.pathname);
    if (bundled) {
      try {
        const fresh = await fetch(request);
        if (fresh.ok) {
          await cache.put(request, fresh.clone());
          return fresh;
        }
      } catch {
        // A previously installed offline copy may still be usable.
      }
    }
    const saved = await cache.match(request, {ignoreSearch: isLocal});
    if (saved) return saved;
    try {
      const response = await fetch(request);
      if (response.ok || response.type === 'opaque') {
        // Avoid caching HTML from arbitrary paths that may be SPA fallbacks.
        if (isMath || !request.mode.includes('navigate')) await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        const offlinePage = await cache.match(new URL('./index.html', self.registration.scope));
        if (offlinePage) return offlinePage;
      }
      return Response.error();
    }
  })());
});
