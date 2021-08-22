import {  useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import {fechWeatherAction} from "./redux/actions/weatherSlices"

//display icon https://openweathermap.org/img/wn/${icon}.png

function App() {
  const [city, setCity] = useState('')
  
  //dispatch action
  const dispatch=useDispatch();

  const state=useSelector(state=>state)
  console.log(state)
  const {weather,error}=state;
  return (
    <div>
      {error||!weather?

      <section class="relative bg-gray-900  min-h-screen">
      <div class="relative container pt-12 px-4 mb-20 mx-auto text-center">
        <h2 class="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
        Weather Application
        </h2>
        <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
          Choose a country or a city and find out the current weather situation .
        </p>
        {/* Input */}
        <input
          value={city}
          onChange={e=>setCity(e.target.value)}
          placeholder="Search City"
          class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
        ></input>
        {/* Button */}
        <button
          onClick={()=>dispatch(fechWeatherAction(city))}
          type="button"
          className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
      {/* Content goes here */}
      <div class="max-w-6xl px-4 mx-auto ">
        <div class="flex flex-wrap -mx-4 justify-center">
          <div class="w-full md:w-1/3 px-4">
            <div class="p-8 border border-blue-800 rounded-lg">
              <div class="flex justify-start  items-center">
              <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
                Please enter a valid name of a country or a city ...
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      :
    <section  class="relative bg-gray-900  min-h-screen">
        <div class="relative container pt-12 px-4 mb-20 mx-auto text-center">
          <h2 class="mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold">
            Weather Application
          </h2>
          <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50">
            Choose a country or a city and find out the current weather situation .
          </p>
          {/* Input */}
          <input
            value={city}
            onChange={e=>setCity(e.target.value)}
            placeholder="Search City"
            class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
          ></input>
          {/* Button */}
          <button
            onClick={()=>dispatch(fechWeatherAction(city))}
            type="button"
            className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
        {/* Content goes here */}
        <div style={{paddingBottom:"30px"}} class="max-w-6xl px-4 mx-auto ">
          <div class="flex flex-wrap -mx-4 justify-center">
            <div class="w-full md:w-1/3 px-4">
              <div class="p-8 border border-blue-800 rounded-lg">
                <div class="flex justify-start  items-center">
                  <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                    {/* weather logo */}
                     <img
                        class="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                        alt="/"
                      />
                  </span>
                  <h1 class="text-gray-300 pl-5">
                     {weather?.weather[0].main}
                  </h1>{" "}
                </div>
                <h1 class="text-gray-300 text-center text-4xl mb-10">
                  {Math.ceil(Number(weather?.main.temp-273))}
                  {" "}
                  <span class="text-yellow-500 text-4xl">°C</span>
                </h1>
                <h3 class="mb-6 text-xl text-white font-semibold">
                  {weather?.name}, {weather?.sys?.country}
                </h3>
                <p class="mb-8 text-gray-300">
                  Weather in {weather?.name},{" "} country :{" "}
                    {weather?.sys?.country} ,is described as {" "}
                    {weather?.weather[0].description} with a temperature of{" "}
                    {Math.ceil(Number(weather?.main.temp-273))} °C and a humidity of{" "}
                    {weather?.main?.humidity} % . <br></br>
                     Additional informations :<br></br>
                     1. Pressure : {weather?.main.pressure} Pa.<br></br>
                     2. Sea Level : {weather?.main.sea_level} .<br></br>
                     3. Visibility : {weather?.visibility} m .<br></br>
                     4. Wind Speed : {weather?.wind.speed} km/h .
                </p>
                  <span class="flex items-center justify-center w-16 h-16 rounded-full border-2">
                    {/* weather logo */}
                    <img
                        class="w-56 "
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                        alt="/"
                      />
                  </span>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      }
      {/* Footer */}
      <div style={{height:"50px",paddingTop:"10px"}}  class="text-center bg-red-700">
        <p class="mb-6  text-gray-300">
          Developed by mohamed ali
        </p>
      </div>
    </div>
  );
}

export default App;