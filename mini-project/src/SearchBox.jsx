import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false); // Corrected initialization

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e7e58ee5689f8d80bb2fd3fc8522ce72";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            
            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleChange = ({ target: { value } }) => {
        setCity(value);
    };

    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            console.log(city);
            setError(false); // Reset error state on successful submission
        } catch (err) {
            setError(true); // Set error state to true on API error
        }
    };
    
    return (
        <div className='box'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p>No such place</p>} {/* Conditionally render error message */}
            </form>
        </div>
    );
}

export default SearchBox;
