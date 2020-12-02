import React from 'react'

export default function Navbar(props){
    return (
        <div align='center' className="row">
            <div className="col-md-5">
                <h1 className="title">Weather-app</h1>

            </div>
            <div align='center' className="col-md-5">
                <form className="region" onSubmit={(e)=>props.changeWeather(e)}>
                    <input className="Sregioninput" placeholder="Enter Location" 
                    onChange={(e)=>props.changeRegion(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}