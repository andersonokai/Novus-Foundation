var google;

function init() {
    var mapElement = document.getElementById('map');
    if (!mapElement) return;

    if (typeof google === 'undefined' || !google.maps) {
        mapElement.innerHTML = '<iframe title="Novus Foundation location map" src="https://www.google.com/maps?q=9MCJ%2BHFH%20Odumase&output=embed" width="100%" height="470" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        return;
    }

    var myLatlng = new google.maps.LatLng(7.3350, -2.3560);
    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        styles: [{ "featureType": "administrative.country", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "hue": "#ff0000" }] }]
    };

    var map = new google.maps.Map(mapElement, mapOptions);
    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png'
    });
}

if (typeof google !== 'undefined' && google.maps && google.maps.event) {
    google.maps.event.addDomListener(window, 'load', init);
} else {
    window.addEventListener('load', init);
}