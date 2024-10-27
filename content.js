function removeAds() {
    const adSelector = ".geofs-adbanner";
    
    const ads = document.querySelectorAll(adSelector);
    ads.forEach(ad => {
        ad.remove();
    });
}

window.addEventListener('load', removeAds);
