import React, { Component } from "react";
import { useParams } from "react-router-dom";
import CrudShow from "./CrudShow.js";

export default function Show() {

    let params = useParams()

  
    return (<CrudShow section={params.section} id={params.id}></CrudShow>)
  
  }


