import React from 'react';
import { useEffect, useState } from 'react';

const Servicios = () => {

    const [final,setFinal]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5225/Services').then((resp) => resp.json()).then((data)=>{setFinal(data)});
    },[])
    return(
      <>
      <ul>
        {final.map((data,index)=>{
          console.log(data)
          return <li key={data.name}>"{data.name}" - Dia: {data.date} Horario: {data.time} </li>
        })}
      </ul>
      </>
    );
  }
  
  export default Servicios;