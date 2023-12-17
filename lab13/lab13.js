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
  
  if (result.weather[0].icon == "13d") {
    video.setAttribute('src', './weatherWideo/snow.webm');
  }

  if (result.weather[0].icon == "13n") {
    video.setAttribute('src', './weatherWideo/snow.webm');
  }

  if (result.weather[0].icon == "11d") {
    video.setAttribute('src', './weatherWideo/rain.mp4');
  }

  if (result.weather[0].icon == "09d") {
    video.setAttribute('src', './weatherWideo/rain.mp4');
  }

  if (result.weather[0].icon == "10d") {
    video.setAttribute('src', './weatherWideo/rain.mp4');
  }

  if (result.weather[0].icon == "10n") {
    video.setAttribute('src', './weatherWideo/rain.mp4');
  }

  if (result.weather[0].icon == "50d") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }
  if (result.weather[0].icon == "02d") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }
  if (result.weather[0].icon == "02n") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }
  if (result.weather[0].icon == "03d") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }
  if (result.weather[0].icon == "03n") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }
  if (result.weather[0].icon == "04d") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }
  if (result.weather[0].icon == "04n") {
    video.setAttribute('src', './weatherWideo/cloudy.mp4');
  }

  if (result.weather[0].icon == "01d") {
    video.setAttribute('src', './weatherWideo/normally.webm');
  }
  if (result.weather[0].icon == "01n") {
    video.setAttribute('src', './weatherWideo/normally.webm');
  }
  
}
