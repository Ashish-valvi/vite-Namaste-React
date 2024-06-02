import React from "react";
import ReactDOM from "react-dom/client";
import data from "/data.json"


const Header = ()=>(
  <div id="header-div">
    <div id="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCi32Vmt1sYHoeFJTD1AtUkThY7pFDttjHWg&s"/>
    </div>
    <ul id="top-menu">
      <li>Home</li>
      <li>About</li>
      <li>Cart</li>
    </ul>
  </div>
)

const Card = ({adata})=>(
  <div id="main-card">
 
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_230/${adata[0].info.cloudinaryImageId	}`}/>
    <h2>{adata[0].info.name}</h2>
    <h2>{adata[0].info.costForTwo}</h2>
    <h3>⭐️{adata[0].info.avgRating}&nbsp; {adata[0].info.totalRatingsString}&nbsp;Rating</h3>
    <h3>{adata[0].info.sla.deliveryTime} minutes {adata[0].info.sla.lastMileTravelString}</h3>
    <h3>{adata[0].info.locality} , {adata[0].info.areaName}</h3>
  </div>
)



const BodyBox = ()=>(
  <div id="searchbar"><input type="text"/></div>,
  <div id="card-div"><Card adata={data}/>

 
  </div>
)



const App = ()=>(
  <div id="main-container">
    <Header/>
    <BodyBox/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)

