// geolocalizacion.js


function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {

        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var map = new google.maps.Map(document.getElementById('aca'), {
            center: pos,
            zoom: 8
        });
    
        var marker = new google.maps.Marker({
            position: pos,
            map: map
        });
    
    });
}
