let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.936716, lng: 116.466445 },
    zoom: 8,
  });
}
