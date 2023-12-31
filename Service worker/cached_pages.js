const cacheName = 'v2';

const cacheAssets = ['index.html','about.html','script.js']

self.addEventListener('install', e =>{
    console.log('Service Worker Installed');

    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('service Worker: Caching Files');
            cache.addAll(cacheAssets);
        })
        .then(()=> self.skipWaiting())
    )
})

self.addEventListener('activate', e =>{
    console.log('Service Worker: Activated');
    
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

//call fetch event

self.addEventListener('fetch', e => {
    console.log('service worker: fetching');

    e.respondWith(
        fetch(e.request)
        .then(res => {
            //make copy/clone of response
            const resClone = res.clone();
            //open cache
            caches
            .open(cacheName)
            .then(cache => {
                cache.put(e.request,resClone);
            })
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    )
})