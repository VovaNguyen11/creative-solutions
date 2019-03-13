(($) => {
    $(document).ready(() => {
        const $map = $('.map-container');
        const map = new google.maps.Map(
            $map[0], {
                center: {
                    lat: 40.6561288,
                    lng: -73.8831155
                },
                zoom: 13,
                disableDefaultUI: true,
                draggable: false
            });
        const markerImage = {
            url: '/assets/img/icons/map-marker.svg',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(50, 50)
        };
        const marker = new google.maps.Marker({
            position: {
                lat: 40.6810703,
                lng: -73.8800896,
            },
            map: map,
            icon: markerImage
        });
        window.initMap = initMap;
    });
})(jQuery)