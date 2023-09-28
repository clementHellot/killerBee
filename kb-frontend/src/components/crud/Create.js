import React from "react"

import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import Ingredient from "../../models/Ingredient.js";
import FreezBe from "../../models/FreezBe.js";

import CrudCreate from "./CrudCreate.js"
import Procede from "../../models/Procede.js";


export default function Create() {

  let params = useParams();
  let [searchParams] = useSearchParams();
  let error = searchParams.get("error");
  const navigate = useNavigate();
  console.log(params);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();

    let type = event.target[0].value;
    console.log(event.target);
    let item = null;
    let url = null;
    let id = event.target[1].value;

    switch (type) {
      case "ingredient":
        let name = event.target[2].value; // event.target.elements.name.value
        let description = event.target[3].value; // event.target.elements.description.value
        item = new Ingredient(id, name, description);
        url = "/ingredients";
        break;

      case "freezbe":
        let nameFreezbe = event.target[2].value; // event.target.elements.name.value
        let descriptionFreezbe = event.target[3].value; // event.target.elements.description.value
        let price = event.target[4].value; // event.target.elements.description.value
        let range = event.target[5].value; // event.target.elements.description.value
        let ingredients = [];
        url = "/freezbes";

        if(event.target.length > 6){
          for(let i = 6; i < event.target.length; i+=2){
            {
              if(event.target[i].type === "submit")
                break;

              let idIngredient = event.target[i].value;
              let quantity = event.target[i+1].value;
              ingredients.push({id : idIngredient, weight : quantity});
            }
          }
        }
        item = new FreezBe(id, nameFreezbe, descriptionFreezbe, price, range, ingredients);
        break;

      case "procede":
        let nameProcede = event.target[2].value; // event.target.elements.name.value
        let descriptionProcede = event.target[3].value; // event.target.elements.description.value
        let freezBeId = event.target[4].value; // event.target.elements.description.value
        let steps = [];
        url = "/procedes";

        if(event.target.length > 5){
          for(let i = 5; i < event.target.length; i+=2){
            {
              if(event.target[i].type === "submit")
                break;

              let name = event.target[i].value;
              let description = event.target[i+1].value;
              steps.push({name : name, description : description});

            }
          }
        }
        item = new Procede(id, nameProcede, descriptionProcede, freezBeId, steps);
        break;

      default:
        break;
    }
    

    let response = await item.insert();
    if (response.status >= 200 && response.status < 300) {

      navigate(url + '?success=' + response.message);
    }
    else {
      error = response.message;
      navigate('/crud/' + type + '?error=' + error);
    }




  };

  return (<CrudCreate section={params.section} onSubmit={handleSubmit} error={error}></CrudCreate>);

}

