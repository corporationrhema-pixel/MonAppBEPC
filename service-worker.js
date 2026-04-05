// ✅ service-worker.js - Version avec cache busting
// APRÈS (incrémente le numéro) :
const CACHE_NAME = 'bepc-v3';  // ← Change à chaque déploiement !
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/images/bg.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  // Force l'activation immédiate
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // Supprime les anciens caches
  e.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).then((fetchResp) => {
        // Met à jour le cache pour les futures requêtes
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, fetchResp.clone());
          return fetchResp;
        });
      });
    })
  );
});
