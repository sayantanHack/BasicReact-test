console.log("Hiii!!");
var map;

function initMap(){
    var options = {
        zoom=8,
        center:{lat:22.6052248,lng:88.38067 }
    }
    map = new google.maps.Map(document.getElementById('map'),options);
}