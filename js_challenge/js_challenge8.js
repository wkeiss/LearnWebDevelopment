let map1;

function initMap() {
  map1 = new google.maps.Map(document.getElementById("googlemap"), {
    center: { lat: 39.936716, lng: 116.466445 },
    zoom: 8,
  });
}