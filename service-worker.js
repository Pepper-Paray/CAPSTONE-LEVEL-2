const CACHE_NAME = 'mindcare-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/signup.html',
  '/soothing.html',
  '/puzzles.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
  const title = 'Soothing Sounds';
    const bubbleTitle = document.getElementById('bubbleTitle');
    if (bubbleTitle) {
      bubbleTitle.innerHTML = '';
      for(let i=0;i<title.length;i++) {
        const span = document.createElement('span');
        span.className = 'bubble-letter';
        span.innerText = title[i] === ' ' ? '\u00A0' : title[i];
        span.style.animationDelay = (i*0.08)+'s';
        bubbleTitle.appendChild(span);
      }
    }
    // Mental Health Tip API
    fetch('https://mentalhealthapi.vercel.app/api/tip')
      .then(r=>r.json()).then(data=>{
        document.getElementById('mentalTip').innerHTML = '<b>Tip:</b> '+data.tip;
      }).catch(()=>{
        document.getElementById('mentalTip').innerHTML = '<b>Tip:</b> Take a deep breath and remember you are enough!';
      });
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js');
      });
    }
