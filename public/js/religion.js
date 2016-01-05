 var markers = [
      {
        "title": 'Safa Masjid',
        "lat": '15.4066289',
        "lng": '73.9978319',
        "description": 'Safa Masjid'
    },
    {
        "title": 'Basilica of Bom Jesus',
        "lat": '15.500899',
        "lng": '73.9094385',
        "description": 'Basilica of Bom Jesus'
    },
      {
        "title": 'Tambi Surla Mahadev Temple',
        "lat": '15.4390326',
        "lng": '74.2525798',
        "description": 'Tambi Surla Mahadev Temple'
    },
       {
        "title": 'Shri Deva Bodgeshwar Sansthan',
        "lat": '15.5845423',
        "lng": '73.8036004',
        "description": 'Shri Deva Bodgeshwar Sansthan'
    },
    ];
    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }