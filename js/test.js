document.addEventListener("DOMContentLoaded", function () {
  const mapContainer = document.getElementById("portfolio-map");
  if (!mapContainer || typeof L === "undefined") {
    return;
  }

  // Voorbeeldcoördinaten: Antwerpen
  const myLat = 51.2194;
  const myLng = 4.4025;

  const map = L.map("portfolio-map").setView([myLat, myLng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap-bijdragers"
  }).addTo(map);

  const marker = L.marker([myLat, myLng]).addTo(map);
  marker.bindPopup("<strong>Ayoub El Aissati</strong><br>Antwerpen (voorbeeldlocatie)").openPopup();
});
