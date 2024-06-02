import { useParams } from "react-router-dom"
import { json } from "express/lib/response";

const DetailedCart = ()=>{
   const params = useParams();
   const {cartid} = params;
   const myCart =json.map((elem)=>{
     if (elem.info.id===cartid )
      return elem
   })
   return (
    <div>
      <h1>{myCart.name}</h1>
       
    </div>
   )
}

export default DetailedCart;