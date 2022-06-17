const API_KEY = "d818532474251bad1d277319dd7f7750"; 
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/";

const onSuccess = async (pos)=>{
    const {coords : { latitude : lat, longitude : lng } } = pos;
    const res =await fetch(`${WEATHER_URL}weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`);
    const result = await res.json(); 
    // console.log(result.name, result.weather[0].main );  
    console.log(result );  
    document.querySelector("#top-left").innerText = result.name;
    document.querySelector("#top-right").innerText = `${Math.round(result.main.temp)}℃ / ${result.weather[0].main}`;
}
const onError =  (err)=>{
    console.log(err);
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

