const map = L.map('map').setView([42.7339, 25.4858], 7); // Centered on Bulgaria

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const markers = [
  { lat: 42.6977, lng: 23.3219, type: 'active', city: 'Sofia' },
  { lat: 43.2141, lng: 27.9147, type: 'closed', city: 'Varna' },
  { lat: 42.1354, lng: 24.7453, type: 'available', city: 'Plovdiv' },
  { lat: 43.8356, lng: 25.9657, type: 'standby', city: 'Ruse' },
  { lat: 42.8832, lng: 25.3261, type: 'operation', city: 'Veliko Tarnovo' }
];

const typeColors = {
  active: 'red',
  closed: 'green',
  available: 'blue',
  standby: 'orange',
  operation: 'black'
};

markers.forEach(({ lat, lng, type, city }) => {
  L.circleMarker([lat, lng], {
    color: typeColors[type],
    radius: 8,
    fillOpacity: 0.9
  })
    .addTo(map)
    .bindPopup(`<strong>${city}</strong><br>${type.charAt(0).toUpperCase() + type.slice(1)} Status`);
    
});


