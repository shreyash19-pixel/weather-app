import React, { useState, useEffect, useRef } from 'react';
import {
    CityName,
    CityWrap,
    Container,
    MinMaxTemp,
    MinTemp,
    MinTempWrap,
    SearchBtn,
    SearchInput,
    SearchWrapper,
    WeatherConditionsWrap,
    WeatherInfo,
    WeatherWrapper,
    Wrapper,
} from '../../styles/Weather';
import axios from 'axios';
import { TiWeatherPartlySunny, TiWeatherSunny, TiWeatherCloudy, TiWeatherShower, TiWeatherStormy, TiWeatherSnow } from 'react-icons/ti';

const Weather = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('delhi');
    const [sign, setSign] = useState();
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

            const apiKey = process.env.REACT_APP_API_KEY;

            const options = {
                method: 'GET',
                url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
                params: { city: `${city}` },
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
                },
            };
              
            
                const response = await axios.request(options);

                if (!response.ok) {
                    console.log('Response was not ok');
                } 

                const weatherData = response.data;
                setWeather(weatherData);
                updateWeatherIcon(weatherData.temp);
                setError('')
            } catch (error) {
                setError('No Such Place');
            }
        };

        fetchData();
    }, [city]);


    const updateWeatherIcon = (temp) => {
        if (temp > 25) {
            setSign(<TiWeatherSunny />);
        } else if (temp >= 20 && temp <= 25) {
            setSign(<TiWeatherPartlySunny />);
        } else if (temp >= 15 && temp < 20) {
            setSign(<TiWeatherCloudy />);
        } else if (temp >= 10 && temp < 15) {
            setSign(<TiWeatherShower />);
        } else if (temp < 10) {
            setSign(<TiWeatherStormy />);
        } else if (temp < 5) {
            setSign(<TiWeatherSnow />);
        }
    };

    const handleWeather = () => {

        const cityName = inputRef.current.value;
        setCity(cityName);
    };

    return (
        <Container>
            <Wrapper>
                <WeatherWrapper>
                    <SearchWrapper>
                        <SearchInput placeholder="Search City..." ref={inputRef} />
                        <SearchBtn onClick={handleWeather}>Get Weather</SearchBtn>
                    </SearchWrapper>
                    {error.length > 0 ? (
                        <CityWrap style={{ color: 'white' }}>{error}</CityWrap>
                    ) : (
                        <WeatherInfo>
                            <CityWrap>
                                <CityName>{city}</CityName>
                            </CityWrap>
                            <WeatherConditionsWrap>{sign}</WeatherConditionsWrap>
                            <CityWrap>
                                <CityName>{weather?.temp + '°c'}</CityName>
                            </CityWrap>
                            <MinMaxTemp>
                                <MinTempWrap>
                                    <MinTemp>{'Min: ' + weather?.min_temp + '°c'}</MinTemp>
                                </MinTempWrap>
                                <MinTempWrap>
                                    <MinTemp>{'Max: ' + weather?.max_temp + '°c'}</MinTemp>
                                </MinTempWrap>
                            </MinMaxTemp>
                        </WeatherInfo>
                    )}
                </WeatherWrapper>
            </Wrapper>
        </Container>
    );
};

export default Weather;
