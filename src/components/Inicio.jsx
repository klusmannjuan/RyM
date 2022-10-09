import React, { useEffect, useState } from "react";
import { todospersonajes } from "../funciones/funciones";


const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)

    useEffect(() =>{
        todospersonajes(setPersonajes)
    },[])

  return (
    <>
        {personajes !=  null ? (
            personajes.map(personaje => (
                <div key={personaje.id}>
                    <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                    <img src={personaje.image} alt=""/>
                </div>
            ))
        ) : ('no hay personajes')}
    </>
  )
}

export default Inicio;