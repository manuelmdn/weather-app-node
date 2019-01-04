const axios = require('axios');

const getPlaceLatLng = async(address) => {
    let encondedURL = encodeURI(address);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No result for ${address}`);;
    }

    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        address: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }


}

module.exports = {
    getPlaceLatLng
}