import data from "../utils/data.json"
import Card from "../components/Card"
import { useState } from "react"
import React from "react"

const BodyBox = ()=>{
  
  const [search,setSearch]= useState("")// for search string
  const [filteredData,setFilteredData]=useState(data)
  return(<>
<div id="search-div">
<input type="text" onChange={(e)=>{
 setSearch(e.target.value)
}}/>
<button onClick={()=>{
    const newFilterdData=data.filter((elem)=>{
       return elem.info.name.toLowerCase().includes(search.toLowerCase())
    })
setFilteredData(newFilterdData);
}}>search</button>
</div>
  
  
<div id="card-div">
  {filteredData.map((elem)=>( //count.map will render new filtered data
  <Card key={elem.info.id} newdata={elem} /> // we are sending props to card component as a argument and sending key as well 
))}
</div>

</>)
}
export default BodyBox

