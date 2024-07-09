import { useEffect, useState } from "react"
import sunset from "./assets/sunset.jpg"

function App() {
  const [results, setResults] = useState("")
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=24.8546842&lon=67.0207055&&units=metric&appid=bd942639e61343682ea4011dc5422335"

  useEffect(() => {
    async function getData() {
      const response = await fetch(url, {
        method: "GET",
      })

      try {
        const data = await response.json()
        setResults(data)
      } catch (error) {
        console.log("data fetch error", error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url("${sunset}")` }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>{results.name}</h3>
        </div>
        <div className="header">
          <div>
            {results.main ? (
              <h1>{results.main.temp}&deg;</h1>
            ) : (
              <h1>...Loading</h1>
            )}
          </div>
          <div>
            {results.weather.main ? (
              <p>{results.weather.main}</p>
            ) : (
              <p>...Loading</p>
            )}
          </div>
        </div>

        <div className="footer">
          <div>
            <h4>65F</h4>
            <p>Feels like</p>
          </div>
          <div>
            <h4>20%</h4>
            <p>Humidity</p>
          </div>
          <div>
            {results.main ? (
              <h4>{results.wind.speed}MPH</h4>
            ) : (
              <h1>...Loading</h1>
            )}

            <p>wind speed</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
