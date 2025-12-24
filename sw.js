const CACHE_NAME = 'jarvis-mkx-boot-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    'https://aframe.io/releases/1.4.0/aframe.min.js',
    'https://unpkg.com/compromise',
    'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js',
    'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
