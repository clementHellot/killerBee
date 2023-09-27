import React from "react"

import { useParams, useNavigate,useSearchParams } from "react-router-dom"
import Ingredient from "../../models/Ingredient.js";

import CrudCreate from "./CrudCreate.js"


export default function Create() {

    let params = useParams();
    let [searchParams] = useSearchParams();
    let error = searchParams.get("error");
    const navigate = useNavigate();
    console.log(params);

  const handleSubmit = async(event) => {
    event.preventDefault();

    let name = event.target[0].value; // event.target.elements.name.value
    let description = event.target[1].value; // event.target.elements.description.value
    let item = new Ingredient("",name,description);
    let response =  await item.insert(); 
    console.log(response);
    if(response.status >= 200 && response.status < 300){
        navigate('/ingredients?success='+response.message);
    }
    else{
      
        error = response.message;
        navigate('/crud/ingredient?error='+error);
    }




  };
  
    return (<CrudCreate section={params.section} onSubmit={handleSubmit} error={error}></CrudCreate>);
  
  }

