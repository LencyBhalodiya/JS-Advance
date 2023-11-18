if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('./cached_pages.js')
    .then(res => res)
    .catch(err => console.log( `service worker error: ${err}`))

}