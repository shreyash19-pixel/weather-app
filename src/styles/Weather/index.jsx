import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    height: 100vh;
    background: linear-gradient(to bottom, #ff9966, #ff5e62, #ff355d)
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 15px;
`

export const WeatherWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    padding-inline: 15px;
    gap: 20px;
`

export const SearchWrapper = styled.div`
    display: flex;
    gap: 30px;
    justify-content: space-between;

    @media (max-width: 424px)
    {
        flex-direction: column;
    }
`

export const SearchInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    outline: none;

    &::placeholder {
        color: white; 
    }
`

export const SearchBtn = styled.div`
    background-color: #ffc400;
    padding: 10px 15px;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;

    @media (max-width: 424px)
    {
        text-align: center;
    }
`
export const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`

export const CityWrap = styled.div`
    width: 100%;
    text-align: center;
`

export const CityName = styled.h1`
    font-size: 40px;
    color: white;
    font-weight: 600;

    @media (max-width: 424px)
    {
        font-size: 22px;
    }
`

export const WeatherConditionsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 90px;
    color: white;
`

export const MinMaxTemp = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
`

export const MinTempWrap = styled.div`
    text-align: center;
`
export const MinTemp = styled.h1`
    color: white;

    @media (max-width: 424px)
    {
        font-size: 22px;
    }
`




