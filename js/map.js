// Map coordinates for Namibian regions
const regionCoordinates = {
    Erongo: [-22.4, 15.9],
    Hardap: [-24.5, 17.8],
    Karas: [-27.0, 18.0],
    'Kavango East': [-18.0, 20.0],
    'Kavango West': [-18.0, 18.5],
    Khomas: [-22.6, 17.1],
    Kunene: [-19.5, 14.5],
    Ohangwena: [-17.5, 16.0],
    Omaheke: [-21.5, 19.5],
    Omusati: [-18.0, 15.0],
    Oshana: [-18.0, 16.0],
    Oshikoto: [-18.5, 17.0],
    Otjozondjupa: [-20.5, 18.0],
    Zambezi: [-17.5, 24.0],
    'Northern Namibia': [-18.0, 16.0],
    'Central Namibia': [-22.0, 17.0],
    'Southern Namibia': [-25.0, 17.5],
    Ovamboland: [-18.0, 16.0],
    Windhoek: [-22.57, 17.08],
    Nationwide: [-22.0, 17.0]
};

// Initialize map for recipe region
function initMap(region) {
    const mapElement = document.getElementById('modal-map');
    mapElement.innerHTML = '';

    if (!regionCoordinates[region]) return;

    const coords = regionCoordinates[region];
    const map = L.map(mapElement).setView(coords, 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add Namibia outline (simplified polygon)
    const namibiaOutline = L.polygon([
        [-17.0, 12.0],
        [-17.0, 25.0],
        [-29.0, 25.0],
        [-29.0, 12.0]
    ], {
        color: '#b45309',
        weight: 2,
        fillColor: '#fef3c7',
        fillOpacity: 0.3
    }).addTo(map);

    // Add a circle marker for the region
    L.circleMarker(coords, {
        color: '#b45309',
        fillColor: '#d97706',
        fillOpacity: 0.8,
        radius: 10,
        weight: 2
    }).addTo(map);

    // Add a label for the region
    L.marker(coords, {
        icon: L.divIcon({
            className: 'region-label',
            html: `<div style="background-color: #d97706; color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; font-weight: bold;">${region}</div>`,
            iconSize: [100, 20],
            iconAnchor: [50, 10]
        })
    }).addTo(map);
}