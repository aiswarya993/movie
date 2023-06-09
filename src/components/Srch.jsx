import React, { useEffect, useState } from "react";
import { useFetch } from "../fetch/useFetch";
import { Link } from "react-router-dom";

export const Srch = () => {
  const [defquery,setdefquery]=useState("")

  const [query,setquery]=useState("")
  const [data]=useFetch(`search/movie`,{query:defquery})
  

  useEffect(()=>{
   let timer= setTimeout(()=>{
    setdefquery(query)
    },[1000])

    return()=>{
      clearInterval(timer)
    }
  },[query])
  return (
    
      <div>
        <input type="search" placeholder="Search here" value={query} onChange={(e)=> setquery(e.target.value)}/>
     
     <div className="res"><ul>
      {data?.results?.map(itm=>(
      <Link to={`movie/${itm.id}`}> <li>{itm.title}</li></Link> 
      ))}
      </ul></div>
     
      </div>
   
  );
};
