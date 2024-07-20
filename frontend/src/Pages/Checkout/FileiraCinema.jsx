import React, { useState } from "react";

export function FileiraCinema(props) {
  const [assentosClicados, setAssentosClicados] = useState({});

  function clicandoAssento(id) {
    setAssentosClicados(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  const numbers = [1, 2, 3, 4, 5];
  
  return (
    <div className="Assentos-Cinema-Fileira">
      <div className="Assentos-Cinema-Fileira-Letra">{props.FileiraLetra}</div>
       {numbers.map((number, index) => 
        <CinemaSeat
        key={index}
        FileiraNum={props.FileiraLetra + number}
        clicandoAssento={() => clicandoAssento(number)}
        isAssentoClicado={assentosClicados[number]}
        id={number}
        />
       )}
        
    </div>
  )
}

export function CinemaSeat(props) {
  return (
    <div onClick={props.clicandoAssento} className="Assentos-Cinema-Fileira-Seat" id={props.id}>
      {props.isAssentoClicado ? (
        <span className="Seat-Text">{props.FileiraNum}</span>
      ) : (
        <span className="Seat-Text"></span>
      )}
    </div>
  )
}