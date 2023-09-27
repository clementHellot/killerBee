import React from "react"

import { useParams,useNavigate } from "react-router-dom"

import CrudEdit from "./CrudEdit.js"


export default function Edit() {

    let params = useParams()
    
    const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // navigate('/ingredients');
  };
  
    return (<CrudEdit section={params.section} id={params.id} onSubmit={handleSubmit}></CrudEdit>);
  
  }

