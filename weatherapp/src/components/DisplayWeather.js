import React from 'react'

export default function DisplayWeather(props) {
 const {   location , temperature, description,  region, country,  wind_speed, pressure, humidity,  img, cloudcover ,  precip} = props.weatherData;
    return(          
    	<div class="wrapper">
         <div class="box">
			<div class="box-top box-top-red">
				<div class="box-top-bar">
					location 
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud-rain fa-3x"></i>
					{location}
				</div>
			</div>           
        </div>
        <div class="box">
			<div class="box-top box-top-orange">
				<div class="box-top-bar">
                Countery
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud-sun fa-3x"></i>
					{country}
				</div>
			</div>
        </div>
        <div class="box">
			<div class="box-top box-top-green">
				<div class="box-top-bar">
                Region
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud-moon fa-3x"></i>
					{region}
				</div>
			</div>
        </div>
        <div class="box">
			<div class="box-top box-top-gray">
				<div class="box-top-bar">
					Temperature
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud-moon-rain fa-3x"></i>
					{temperature}&deg;C
				</div>
			</div>
        </div>
        <div class="box">
			<div class="box-top box-top-blue">
				<div class="box-top-bar">
					cloudcover
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud-moon fa-3x"></i>
                    {cloudcover}
				</div>
			</div>
        </div>
        <div class="box">
			<div class="box-top box-top-purple">
				<div class="box-top-bar">
					Description
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud fa-3x"></i>
					{description}
				</div>
			</div>
        </div>
        <div class="box">
			<div class="box-top box-top-pink">
				<div class="box-top-bar">
					<p><b>humidity</b>(%)</p>
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-sun fa-3x"></i>
				  {humidity}
				</div>
			</div>
        </div>
        <div class="box">
			<div class="box-top box-top-orange">
				<div class="box-top-bar">
               <p><b>Wind_speed</b>(Km/hr)</p> 
					<i class="fas fa-search fa-lg"></i>
				</div>
				<div class="box-top-weather">
					<i class="fas fa-cloud-sun fa-3x"></i>
					{wind_speed}
				</div>
			</div>
         </div>
        </div>
    )
}