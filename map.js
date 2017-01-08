function createMarker(point, map, content) {
    var marker = new google.maps.Marker({
        position: {lat: point.lat, lng: point.lng},
        map: map,
        title: point.title,
        icon: 'blood.png'
    });
    marker.addListener('click', function() {
        new google.maps.InfoWindow({ content: content }).open(map, marker);
    });
    return marker;
}

function initMap() {
    var galicia = {lat: 42.793104, lng: -7.9888223};

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 9,
            center: galicia
        }
    );

    for (var i in puntos_fixos) {
        var punto = puntos_fixos[i];
        createMarker(punto, map, tpl_punto_fixo.render(punto));
    }

    for (var i in puntos_mobiles) {
        var punto = puntos_mobiles[i];
        createMarker(punto, map, tpl_punto_mobil.render(punto));
    }
}
