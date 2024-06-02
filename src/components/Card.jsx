import { useState } from "react"


const Card = ({newdata})=>{
   
  const[oldCart,setCart]=useState(0);

  const operationCart=(operator)=>{
   if (operator==="+"){
    setCart(oldCart+1)
   }else if(operator === "-"){
    if( oldCart !== 0){
      setCart(oldCart-1)
    }
   }else(
    setCart(oldCart+1)
   )
  }
   

  const [heartColor, setHeartColor]=useState("gray")
  
  return(
    <div id="main-card">
    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_280/${newdata.info.cloudinaryImageId}`}/>
      <h2>&nbsp; {newdata.info.name}</h2>
      <h3>&nbsp; {newdata.info.costForTwo}</h3>
      <div id="cart-container"><button id="add" onClick={()=>{operationCart("+")}}>+</button>
      <div id="btn-a" onClick={operationCart}><a href="javascript:void(0)" id="button-a" >Add to Cart</a></div>
      <button id="drop" onClick={()=>{operationCart("-")
      }}>-</button>
      </div>
      
      
      <h2>&nbsp; ⭐️{newdata.info.avgRating} </h2>
      <h3>&nbsp; {newdata.info.sla.deliveryTime} minutes &nbsp;{newdata.info.locality}</h3>
      <h2 id="cart-h2" >&#128722; {oldCart}</h2>
      <p className="heart" onClick={()=>{setHeartColor(heartColor==="gray"?"red":"gray")}} style={{color:heartColor}} >	&#9829;</p>
    </div>
  )
  
}

export default Card


