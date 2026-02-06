
import React,{useEffect,useState} from "react";

function App(){

 const [patients,setPatients]=useState([]);

 useEffect(()=>{
   fetch("http://localhost:5000/patients")
   .then(res=>res.json())
   .then(data=>setPatients(data));
 },[]);

 return(
  <div>
   <h1>Hospital Management System</h1>

   {patients.map(p=>(
    <div key={p.id}>
     {p.name} | {p.age} | {p.disease}
    </div>
   ))}
  </div>
 );
}

export default App;
