// Funktion zum Entfernen der Werbung
function removeAds() {
    // Selektor für das Werbungselement
    const adSelector = ".geofs-adbanner"; // Dies ist der Selektor, der die Werbung identifiziert
    
    // Suche nach allen Werbeelementen und entferne sie
    const ads = document.querySelectorAll(adSelector);
    ads.forEach(ad => {
        ad.remove();
    });
}

// Warte, bis die Seite vollständig geladen ist, und führe die Funktion aus
window.addEventListener('load', removeAds);
