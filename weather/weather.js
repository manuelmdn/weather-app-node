const axios = require('axios');

const getWeather = async(lat, lon) => {
    //let encondedURL = encodeURI(lat);
    let apikey = '10eb4d0c3faa6528af953f7def4b514a';
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);

    return temp = resp.data.main.temp;

}

module.exports = {
    getWeather
}