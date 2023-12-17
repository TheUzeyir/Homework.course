let video=document.querySelector('.back-video')
let input=document.querySelector('.weather_input')
let key = "a298f0b93bb5a239946529b8c17c6770"

input.addEventListener('keypress',(e)=>{
   if (e.keyCode=='13') {
    weatherData(input.value)
   }
})

function weatherData(value) {
    fetch(
        `https:api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`
    ).then((res)=>res.json()).then((data)=>showData(data))
}
function showData(result) {
  let name = document.querySelector(".weather_information_name")
  name.innerText = `${result.name}`

  let temp=document.querySelector('.weather_information_temp')
  temp.innerText=`${result.main.temp}`
  
  let decs=document.querySelector('.weather_information_decs')
  decs.innerText=`${result.weather[0].description}`


  if (result.weather[0].main == "Snow") {
    video.setAttribute('src', './weatherWideo/snow.webm');
  }

  if (result.weather[0].main == "Rain") {
    video.setAttribute('src', './weatherWideo/rain.mp4');
  }

  if (result.weather[0].main == "Clouds") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }

  if (result.weather[0].main == "Clear") {
    video.setAttribute('src', './weatherWideo/normally.webm');
  }
  
}
