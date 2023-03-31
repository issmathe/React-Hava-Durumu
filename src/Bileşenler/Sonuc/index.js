import React from "react";
function index({hava}){
    return(

        <>
        {
            typeof hava.main !="undefined" &&(
                <div className="sonuc">
                <div className="sehir">{hava.name},{hava.sys.country}</div>
                <div className="detay">
                    <div className="derece">{Math.ceil(hava.main.temp)}°c</div>
                    <div className="statu">{hava.weather[0].description}</div>
                </div>
            </div>
            )
        }
        </>

    )
}
export default index