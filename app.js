const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'City Adress',
        demand: true
    }
}).argv;

getInfoWeather = async(address) => {

    try {
        let coord = await place.getPlaceLatLng(address);
        let temp = await weather.getWeather(coord.lat, coord.lng);

        return `The weather in ${coord.address} is ${temp}°c`;

    } catch (error) {
        return `No weather information found`;
    }

}

getInfoWeather(argv.address)
    .then(temp => console.log(temp))
    .catch(e => console.log(e))