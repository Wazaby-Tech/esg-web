<template>
  <Layout>    
    <input type="text" id="txtPlaces" style="width: 250px" placeholder="Enter a location" />

    <p>Location name: <span id='location_name'></span></p>
    <p>Location: <span id='location'></span></p>
    <p>Lat: <span id='lat'></span></p>
    <p>Lon: <span id='lon'></span></p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  mounted() {
    var places = new window.google.maps.places.autocomplete(document.getelementbyid('txtplaces'));
    window.google.maps.event.addlistener(places, 'place_changed', function () {
        var place = places.getplace();
        var address = place.formatted_address;
        var location = place.geometry.location;
        var lat = location.lat();
        var lon = location.lng();

        var locationname = document.getelementbyid('location_name');
        var locationtext = document.getelementbyid('location');
        var lattext = document.getelementbyid('lat');
        var lontext = document.getelementbyid('lon');

        locationname.textcontent = address;
        locationtext.textcontent = location;
        lattext.textcontent = lat;
        lontext.textcontent = lon;
      }
    );   
  }
}

</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.search-location {
  display: block;
  width: 60vw;
  margin: 0 auto;
  margin-top: 5vw;
  font-size: 20px;
  font-weight: 400;
  outline: none;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
}

</style>