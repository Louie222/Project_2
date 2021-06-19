// takes latlong and puts a marker in the map
function initRestaurantMap() {
    const restaurantlatlng = document.querySelector('#restaurantlatlng').value.trim();
    var latLng = restaurantlatlng.split(',')
    
    var myLatLng = { lat: -31.9523, lng: 115.8613 };
     

    var map = new google.maps.Map(document.getElementById("restaurant-map"), {
      zoom: 11,
      center: myLatLng,
    });
  
    //Marker Location
    if(map) {
      var iconMason = new google.maps.InfoWindow({
        content: "<p>Masonmill Cafe, 40 Masonmill Rd, Carmel WA 6076</p>",
      });
      var markerIconMason = new google.maps.Marker({
        position: {lat: parseFloat(latLng[0]), lng: parseFloat(latLng[1])},
        map,
      });
      markerIconMason.addListener("click", () => {
        iconMason.open(map, markerIconMason);
      });
    }
  }

